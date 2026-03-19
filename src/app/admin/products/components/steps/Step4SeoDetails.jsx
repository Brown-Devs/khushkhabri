'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Step4SeoDetails() {
    const {
        control,
        watch
    } = useFormContext();

    const seoTitle = watch('seoTitle') || '';
    const seoDescription = watch('seoDescription') || '';
    const seoKeywords = watch('seoKeywords') || '';

    return (
        <div className="space-y-6 bg-white border rounded-xl p-7">

            <h3 className="text-lg font-semibold text-primary">
                SEO Configuration
            </h3>

            {/* SEO Title */}
            <FormField
                control={control}
                name="seoTitle"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>SEO Title</FormLabel>
                        <FormControl>
                            <Input
                                placeholder="Professional Website Development Services | Brown Devs"
                                {...field}
                            />
                        </FormControl>
                        <p className="text-xs text-gray-500 mt-1">
                            Recommended: 50 to 60 characters
                            ({seoTitle.length} characters)
                        </p>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* SEO Description */}
            <FormField
                control={control}
                name="seoDescription"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>SEO Description</FormLabel>
                        <FormControl>
                            <Textarea
                                placeholder="We provide scalable and SEO optimized web development services tailored for businesses."
                                rows={4}
                                {...field}
                            />
                        </FormControl>
                        <p className="text-xs text-gray-500 mt-1">
                            Recommended: 140 to 160 characters
                            ({seoDescription.length} characters)
                        </p>
                        <FormMessage />
                    </FormItem>
                )}
            />

            {/* SEO Keywords */}
            <FormField
                control={control}
                name="seoKeywords"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>SEO Keywords</FormLabel>
                        <FormControl>
                            <Input
                                placeholder="web development, website design, seo services, app development"
                                {...field}
                            />
                        </FormControl>
                        <p className="text-xs text-gray-500 mt-1">
                            Separate keywords using commas
                        </p>
                        <FormMessage />
                    </FormItem>
                )}
            />

        </div>
    );
}