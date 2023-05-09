import React, {FC, useState} from "react";

export const UploadForm:FC<any> = (props) => {
    const {images, setImages} = props;

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newImages = Array.from(event.target.files);
            setImages([...images, ...newImages]);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">

            <label htmlFor="image-upload" className="mb-4 cursor-pointer">
                <span className="text-lg font-medium text-gray-700">Choose a photo</span>
                <input
                    id="image-upload"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                />
            </label>

            <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {images.map((image: Blob | MediaSource, index: React.Key | null | undefined) => (
                    <img
                        key={index}
                        src={URL.createObjectURL(image)}
                        className="w-full h-full object-cover h-32 w-32 rounded-lg shadow-md"
                    />
                ))}
            </div>

        </div>
    );
};