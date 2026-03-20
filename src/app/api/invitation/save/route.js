import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Invitation from "@/models/invitationModel";
import Order from "@/models/orderModel";
import Theme from "@/models/themeModel";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await connectDB();
        const body = await req.json();
        const {
            orderId,
            inviteId,
            themeName,
            brideName,
            brideFatherName,
            brideMotherName,
            groomName,
            groomFatherName,
            groomMotherName,
            weddingDate,
            side,
            events,
            isCustomization,
            isCreateNew
        } = body;

        if (!orderId) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const order = await Order.findById(orderId);
        if (!order) {
            return NextResponse.json({ error: "Order not found" }, { status: 404 });
        }

        if (isCustomization) {
            // Handle Customization (Invitations)
            let invitation;

            if (isCreateNew) {
                // Generate a unique slug: groom-weds-bride-xyz
                const names = order.mainDetails || { groomName: 'couple', brideName: 'name' };
                const g = names.groomName || 'groom';
                const b = names.brideName || 'bride';
                const base = `${g.toLowerCase().replace(/\s+/g, '-')}-weds-${b.toLowerCase().replace(/\s+/g, '-')}`;
                const xyz = Math.random().toString(36).substring(2, 5); // 3-letter code
                const slug = `${base}-${xyz}`;

                // Fetch theme to get type
                const theme = await Theme.findOne({ name: order.themeName || themeName });
                const themeType = theme?.type || "wedding";

                invitation = await Invitation.create({
                    user: session.user.id,
                    order: orderId,
                    themeName: order.themeName || themeName,
                    type: themeType,
                    slug,
                    weddingDetails: {
                        side: side || 'bride',
                        // Initialize with main details from order? Usually yes.
                        bride: { name: order.mainDetails.brideName, father: order.mainDetails.brideFatherName, mother: order.mainDetails.brideMotherName },
                        groom: { name: order.mainDetails.groomName, father: order.mainDetails.groomFatherName, mother: order.mainDetails.groomMotherName },
                        weddingDate: order.mainDetails.weddingDate,
                    },
                    events: events || []
                });
            } else if (inviteId) {
                invitation = await Invitation.findById(inviteId);
                if (!invitation) return NextResponse.json({ error: "Invitation not found" }, { status: 404 });
                
                if (side) invitation.weddingDetails.side = side;
                if (events) invitation.events = events;
                
                // Also ensures it matches latest order details if edited
                invitation.weddingDetails.bride = { name: order.mainDetails.brideName, father: order.mainDetails.brideFatherName, mother: order.mainDetails.brideMotherName };
                invitation.weddingDetails.groom = { name: order.mainDetails.groomName, father: order.mainDetails.groomFatherName, mother: order.mainDetails.groomMotherName };
                invitation.weddingDetails.weddingDate = order.mainDetails.weddingDate;

                await invitation.save();
            }

            return NextResponse.json({ success: true, invitation });
        } else {
            // Handle Main Details (Order)
            console.log("Saving main details for order:", orderId, { brideName, groomName });
            const updatedOrder = await Order.findByIdAndUpdate(orderId, {
                mainDetails: {
                    brideName,
                    brideFatherName,
                    brideMotherName,
                    groomName,
                    groomFatherName,
                    groomMotherName,
                    weddingDate: new Date(weddingDate),
                }
            }, { new: true });
            
            console.log("Updated order result:", updatedOrder.mainDetails);
            return NextResponse.json({ success: true, order: updatedOrder });
        }

        return NextResponse.json({ success: true, invitation });
    } catch (err) {
        console.error("Save invitation API error:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
