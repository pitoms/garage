// import React from 'react';

// interface ImageGalleryProps {
//   imageSources: string[];
// }

// export const ImageGallery: React.FC<ImageGalleryProps> = ({ imageSources }) => {
//   const [mainImage, ...thumbnailImages] = imageSources;

//   return (
//     <div className="grid gap-4">
//       <div>
//         <img
//           className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
//           src={mainImage}
//           alt="Main Gallery"
//         />
//       </div>
//       <div className="grid grid-cols-5 gap-4">
//         {thumbnailImages.map((src, index) => (
//           <div key={index}>
//             <img
//               src={src}
//               className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer"
//               alt={`gallery-image-${index}`}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;

import React from "react";

interface ImageGalleryProps {
  imageSources: string[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ imageSources }) => {
  return imageSources.length == 1 ? (
    <img src={imageSources[0]} className="w-400 object-fit" />
  ) : (
    ""
  );
};

export default ImageGallery;
