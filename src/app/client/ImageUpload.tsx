import { useState } from "react";

export default function ImageUpload() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold">Upload Images</h2>
      <input type="file" className="mt-2 w-full" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" className="mt-4 w-full rounded-lg" />}
    </div>
  );
}
