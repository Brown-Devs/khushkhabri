import { z } from "zod";

// Step 3 schema for each “big description” section
const ServiceBigDescriptionSection = z.object({
  name: z.string().min(1, "Section Name is required"),
  title: z.string().min(1, "Section Title is required"),
  content: z.string().min(1, "Section Content is required"),
});

// Sub Service schema
const subServiceSchema = z.object({
  name: z.string().min(1, "Sub Service name is required"),
  content: z.string().min(1, "Sub Service description is required"),
  image: z.string().optional(),
  icon: z.string().min(1, "Sub Service Icon is required"),
});

// WhyToBuy schema
const whyChooseUsSchema = z.object({
  icon: z.string().min(1, "Icon is required"),
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Description is required"),
});

// FAQ schema
const faqSchema = z.object({
  question: z.string().min(1, "Question is required"),
  ans: z.string().min(1, "Answer is required"),
});

export const ServiceFormSchema = z.object({
  themeColor: z.string().min(4, "Theme Color is required"),
  icon: z.string().min(1, "Icon is required"),
  name: z.string().min(1, "Name is required"),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  seoKeywords: z.string().optional(),
  slug: z.string().min(1, "Slug is required"),
  shortDescription: z.string().min(1, "Short description is required"),
  headerLabel: z.string().min(1, "Header Label is required"),
  headerImage: z.string().min(1, "Must be a valid image URL"),
  images: z
    .array(z.string().url("Must be a valid image URL"))
    .min(1, "At least one image is required"),
  categories: z.array(z.string()).min(1, "Select at least one category"),
  tags: z.array(z.string()).optional(),
  status: z.boolean(),

  subServiceSectionHeading: z.string().min(1, "Section heading is required"),
  subServiceSectionTagLine: z.string().min(1, "Section tag line is required"),
  subServices: z.array(subServiceSchema).optional(),
  whyChooseUs: z.array(whyChooseUsSchema).optional(),

  contactLine: z.string().optional(),
  faqs: z.array(faqSchema).optional(),
  serviceBigDescription: z.array(ServiceBigDescriptionSection).optional(),

});
