'use client';

import React, { useState } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ImageSelector from '@/components/ImageSelector';
import Image from 'next/image';
import { Textarea } from '@/components/ui/textarea';

export default function Step2PageDetails() {
    const {
        control,
        register,
        watch,
        setValue,
        formState: { errors },
    } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'multipleUsePoints',
    });

    const [imageSelectorIndex, setImageSelectorIndex] = useState(null);
    const { fields: whyChooseUsFields, append: appendWhyToBuy, remove: removeWhyToBuy } = useFieldArray({
        control,
        name: 'whyChooseUs'
    });

    const { fields: faqFields, append: appendFAQ, remove: removeFAQ } = useFieldArray({
        control,
        name: 'faqs'
    });

    // const labTestingReport = watch('labTestingReport') || '';
    // const [labDialog, setLabDialog] = useState(false)

    return (
        <div className="space-y-2">

            {/* Multiple use points list */}
            {/* <div className=' bg-white border rounded-xl p-7'>
                <FormLabel className={'mb-5 text-primary font-bold'}>Multiple Uses of Product -Points (max 10)</FormLabel>

                <div className="space-y-3">
                    {fields.map((field, index) => (
                        <FormItem key={field.id} className="flex gap-2 items-center">
                            <p className='flex border h-full rounded bg-gray-100 px-3 py-1'>{index + 1}</p>
                            <FormControl>
                                <Input
                                    {...register(`multipleUsePoints.${index}`)}
                                    placeholder={`Point #${index + 1}`}
                                />
                            </FormControl>
                            <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                onClick={() => remove(index)}
                            >
                                ✕
                            </Button>
                        </FormItem>
                    ))}

                    {errors.multipleUsePoints && (
                        <p className="text-red-500 text-sm">
                            {errors.multipleUsePoints.message}
                        </p>
                    )}
                </div>

                {fields.length < 10 && (
                    <Button
                        type="button"
                        variant="outline"
                        className="mt-3"
                        onClick={() => append('')}
                    >
                        + Add Point
                    </Button>
                )}
            </div> */}

            {/* Why Choose Us */}
            <div className='bg-white border rounded-xl p-7 space-y-2'>
                <FormLabel className={'text-primary font-bold mb-4'}>Why choose Us</FormLabel>

                <Button
                    type="button"
                    variant="outline"
                    onClick={() => appendWhyToBuy({ icon: '', title: '', content: '' })}
                >
                    + Add Benefit
                </Button>

                {/* Why Choose Us Cards Grid */}
                <div className="gap-3 grid grid-cols-2">
                    {whyChooseUsFields.map((field, index) => (
                        <Card key={field.id} className="p-4 relative">

                            {/* Remove Button */}
                            <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                className="absolute top-2 right-2 rounded-full"
                                onClick={() => removeWhyToBuy(index)}
                            >
                                ✕
                            </Button>

                            {/* Card Details */}
                            <div className="space-y-4">
                                {/* Image selector */}
                                <div className="">
                                    <FormLabel className={'font-bold'}>Icon</FormLabel>
                                    <div className="flex flex-col gap-2 mt-3">
                                        {watch(`whyChooseUs.${index}.icon`) && (
                                            <div className="border rounded-md w-62 h-44 overflow-hidden">
                                                <Image
                                                    src={watch(`whyChooseUs.${index}.icon`)}
                                                    alt="Selected icon"
                                                    height={200}
                                                    width={200}
                                                    className="object-contain w-full h-full"
                                                />
                                            </div>
                                        )}
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="w-full"
                                            onClick={() => setImageSelectorIndex(index)}
                                        >
                                            {watch(`whyChooseUs.${index}.icon`) ? 'Change Icon' : 'Select Icon'}
                                        </Button>
                                    </div>
                                </div>

                                {/* Title */}
                                <div className="">
                                    <FormField
                                        control={control}
                                        name={`whyChooseUs.${index}.title`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className={'font-bold'}>Title</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Benefit title" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* Description */}
                                <div className="">
                                    <FormField
                                        control={control}
                                        name={`whyChooseUs.${index}.content`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className={'font-bold'}>Description</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Detailed explanation" rows={2} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* Icon */}
                                {/* <div className="">
                                    <FormField
                                        control={control}
                                        name={`whyChooseUs.${index}.icon`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className={'font-bold'}>Icon</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="SVG Code" rows={2} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div> */}
                            </div>

                            {/* Image selector dialog */}
                            <ImageSelector
                                open={imageSelectorIndex === index}
                                onOpenChange={(open) => !open && setImageSelectorIndex(null)}
                                setImage={(url) => {
                                    setValue(`whyChooseUs.${index}.icon`, url);
                                    setImageSelectorIndex(null);
                                }}
                            />
                        </Card>
                    ))}
                </div>
            </div>

            {/* Contact Section Heading */}
            <div className=' bg-white border rounded-xl p-7'>
                <FormField
                    control={control}
                    name="contactLine"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={'text-primary font-bold text-md'}>Contact Section - Heading</FormLabel>
                            <FormControl>
                                <Input placeholder="Want you own Website?" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            {/* FAQs */}
            <div className='bg-white border rounded-xl p-7 space-y-2'>
                <FormLabel className={'text-primary font-bold mb-4'}>FAQs</FormLabel>

                <Button
                    type="button"
                    variant="outline"
                    onClick={() => appendFAQ({ question: '', ans: '' })}
                >
                    + Add FAQ
                </Button>

                {/* FAQ Cards Grid */}
                <div className="gap-3 grid grid-cols-2">
                    {faqFields.map((field, index) => (
                        <Card key={field.id} className="p-4 relative">

                            {/* Remove Button */}
                            <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                className="absolute top-2 right-2 rounded-full"
                                onClick={() => removeFAQ(index)}
                            >
                                ✕
                            </Button>

                            {/* Card Details */}
                            <div className="space-y-4">
                                {/* Question */}
                                <div className="">
                                    <FormField
                                        control={control}
                                        name={`faqs.${index}.question`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className={'font-bold'}>Question</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="How much does development Cost ?" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* Answer */}
                                <div className="">
                                    <FormField
                                        control={control}
                                        name={`faqs.${index}.ans`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className={'font-bold'}>Answer</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Minimum Cost is 30K" rows={2} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Lab Testing Report */}
            {/* <div className='bg-white border rounded-xl p-7 w-fit'>
                <FormLabel className={'text-primary font-bold mb-4'}>Lab Testing Report</FormLabel>
                {!labTestingReport &&
                    <div
                        className='border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer h-96 w-96'
                        onClick={() => setLabDialog(true)}>Add Lab Testing Report </div>
                }

                {labTestingReport &&
                    <div>
                        <Image
                            src={labTestingReport}
                            alt='labTesting'
                            height={500}
                            width={500}
                        />

                        <Button type={'button'} onClick={() => setLabDialog(true)} className={'mt-3'}>Change Image</Button>
                    </div>
                }
                <ImageSelector
                    open={labDialog}
                    onOpenChange={(open) => !open && setLabDialog(null)}
                    setImage={(url) => { setValue(`labTestingReport`, url); }}
                />
            </div> */}

        </div>
    );
}
