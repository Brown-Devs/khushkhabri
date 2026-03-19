import mongoose from "mongoose";

const subServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  icon: { type: String },
  content: { type: String, required: true },
});

const whyChooseUsSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  ans: { type: String, required: true },
});

const serviceSchema = new mongoose.Schema(
  {
    themeColor: { type: String, required: true }, //
    icon: { type: String }, //
    name: { type: String, required: true, unique: true, trim: true }, //
    seoTitle: { type: String, trim: true }, //
    seoDescription: { type: String, trim: true }, //
    seoKeywords: { type: String, trim: true }, //
    slug: { type: String, required: true, unique: true, trim: true }, //
    categories: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }, //
    ],
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }], //
    shortDescription: { type: String, required: true, trim: true }, //
    headerLabel: { type: String, required: true }, //
    headerImage: { type: String, required: true }, //
    images: [{ type: String, required: true }], //
    status: { type: Boolean, default: true }, //

    subServices: [subServiceSchema], //
    subServiceSectionHeading: { type: String }, //
    subServiceSectionTagLine: { type: String }, //
    whyChooseUs: [whyChooseUsSchema], //

    contactLine: { type: String }, //
    faqs: [faqSchema], //
    serviceBigDescription: [
      {
        name: { type: String, required: true },
        title: { type: String, required: true },
        content: { type: String, required: true },
      },
    ],

  },
  { timestamps: true }
);

const Service =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);
export default Service;
