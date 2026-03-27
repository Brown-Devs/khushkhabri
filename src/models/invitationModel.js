import mongoose from "mongoose";

const invitationSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

        order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },

        themeName: { type: String, required: true },

        type: {
            type: String,
            enum: ["wedding", "satsang"],
            required: true,
        },

        slug: { type: String, required: true, unique: true },

        // 🔹 COMMON (optional)
        mainDetails: {
            title: String,
            message: String,
            date: Date,
            time: String,
            venue: String,
            preWeddingPhotos: [String],
            showPreWeddingPhotos: { type: Boolean, default: true },
            weddingVideo: String,
            showWeddingVideo: { type: Boolean, default: true },
            musicUrl: String,
        },

        // 🔹 WEDDING ONLY
        weddingDetails: {
            bride: {
                name: String,
                father: String,
                mother: String,
            },
            groom: {
                name: String,
                father: String,
                mother: String,
            },
            weddingDate: Date,
            side: {
                type: String,
                enum: ["bride", "groom"],
            },
        },

        rsvpNumber: { type: String, required: false },

        events: [
            {
                name: String,
                enabled: Boolean,
                date: Date,
                time: String,
                venue: String,
                mapLink: String,
            },
        ],
    },
    { timestamps: true }
);

const Invitation = mongoose.models.Invitation || mongoose.model("Invitation", invitationSchema);
if (Invitation.schema.path('rsvpNumber') === undefined || Invitation.schema.path('mainDetails.musicUrl') === undefined) {
    delete mongoose.models.Invitation;
}
export default mongoose.models.Invitation || mongoose.model("Invitation", invitationSchema);