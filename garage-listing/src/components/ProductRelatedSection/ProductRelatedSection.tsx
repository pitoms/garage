import * as ResponseTypes from "../../lib/types/ResponseTypes";

interface ProductRelatedSectionProps {
  relatedListings?: ResponseTypes.GetListingResponse[];
}

export const ProductRelatedSection: React.FC<ProductRelatedSectionProps> = ({
  relatedListings,
}) => {
  return (
    <>
      <h2 className="text-xl font-700 my-4">Similar</h2>
      {relatedListings && (
        <div className="h-64 gap-2 flex flex-row">
          {relatedListings.map(
            (relatedListing) =>
              relatedListing.imageUrls &&
              relatedListing.imageUrls[0] && (
                <img
                  className="w-full h-full object-cover aspect-square"
                  src={relatedListing.imageUrls[0]}
                  alt="Related Listing"
                />
              )
          )}
        </div>
      )}
    </>
  );
};
