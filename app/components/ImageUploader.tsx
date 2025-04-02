"use client";

import { useState } from "react";

interface ImageUploaderProps {
  onImageUrl: (url: string) => void;
}

const ImageUploader: React.FC<
  ImageUploaderProps
> = ({ onImageUrl }) => {
  const [uploading, setUploading] =
    useState(false);

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploading(true);
      // Here you would typically upload to a service like AWS S3 or Cloudinary
      // For demo purposes, we'll create a local URL
      const url = URL.createObjectURL(file);
      onImageUrl(`![${file.name}](${url})`);
      setUploading(false);
    }
  };

  return (
    <label className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 cursor-pointer">
      {uploading
        ? "⏳ Uploading..."
        : "🖼️ Upload Image"}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </label>
  );
};

export default ImageUploader;
