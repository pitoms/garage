import { FC } from "react";

export interface ImageGalleryProps {
  imageSources: string[];
}

export const ImageGallery: FC<ImageGalleryProps> = ({ imageSources = [] }) => {
  if (!imageSources.length) {
    return <div>No images available</div>;
  }

  return (
    <div className="grid gap-4">
      {/* Display the first image */}
      {imageSources[0] && (
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageSources[0]}
            alt="Primary"
          />
        </div>
      )}

      {/* Display the rest of the images */}
      <div className="grid grid-cols-5 gap-4">
        {imageSources.map((imageSource, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={imageSource}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
