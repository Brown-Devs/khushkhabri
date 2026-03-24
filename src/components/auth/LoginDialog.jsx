"use client";

import React, { useState } from 'react';
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSession, signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { FcGoogle } from "react-icons/fc";

// Zod schema for phone-only form
const phoneSchema = z.object({
    phone: z.string().regex(/^\d{10}$/, { message: "Enter a valid 10-digit phone number" }),
});

const AuthDialog = ({ open, onOpenChange }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const form = useForm({
        resolver: zodResolver(phoneSchema),
        defaultValues: { phone: '' },
        mode: 'onSubmit',
    });

    const handlePhoneSignIn = form.handleSubmit(async (values) => {
        setErrorMsg('');
        setIsLoading(true);

        try {
            const result = await signIn('otp', {
                redirect: false,
                phone: values.phone,
                sessionId: 'ABCX',
                otp: '8568',
            });

            if (result?.error) {
                if (result.error.includes('Invalid user')) {
                    setErrorMsg('Admin users must login through the admin panel');
                } else {
                    setErrorMsg(result.error);
                }
            } else {
                onOpenChange(false);
                window.location.href = result?.url || '/user';
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrorMsg(error ? error.message : 'Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    });

    const handleGoogleSignIn = async () => {
        setIsGoogleLoading(true);
        setErrorMsg('');
        try {
            await signIn('google', { callbackUrl: '/user' });
        } catch (error) {
             console.error('Google login error:', error);
             setErrorMsg('Google login failed. Please try again.');
             setIsGoogleLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md p-0 border-0 overflow-hidden bg-gradient-to-br from-[#f0f7ff] to-[#e6f2ff]">
                <div className="p-8">
                    <DialogHeader>
                        <DialogTitle className="text-center text-3xl font-bold text-primary mb-5">
                            Welcome to Khushkhabri
                        </DialogTitle>
                    </DialogHeader>

                     <Button 
                        type="button" 
                        variant="outline" 
                        className="w-full py-5 mb-6 flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-50" 
                        onClick={handleGoogleSignIn}
                        disabled={isGoogleLoading || isLoading}
                    >
                        {isGoogleLoading ? 'Connecting to Google...' : (
                            <>
                                <FcGoogle className="text-xl" />
                                <span>Sign in with Google</span>
                            </>
                        )}
                    </Button>

                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-[#eef5fe] px-2 text-gray-500">
                                OR CONTINUE WITH
                            </span>
                        </div>
                    </div>

                    <Form {...form}>
                        <form onSubmit={handlePhoneSignIn} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter 10 digit number"
                                                className="py-5 px-4"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full py-5" disabled={isLoading || isGoogleLoading}>
                                {isLoading ? 'Sending OTP...' : 'Send OTP'}
                            </Button>

                            {errorMsg && (
                                <p className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                                    {errorMsg}
                                </p>
                            )}
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AuthDialog;
