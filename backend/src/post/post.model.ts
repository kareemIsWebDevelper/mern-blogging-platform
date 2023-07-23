import { Schema, Document } from 'mongoose';

export interface Post extends Document {
  title: string;
  body: string;
}

export const PostSchema = new Schema<Post>(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
