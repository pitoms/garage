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
        <div className="gap-2 flex flex-row xs:overflow-x-scroll s: overflow-auto">
          {relatedListings.map(
            (relatedListing) =>
              relatedListing.imageUrls &&
              relatedListing.imageUrls[0] && (
                <a href={`/listing/${relatedListing.id}`}>
                  <img
                    className="h-64 object-cover aspect-square"
                    src={relatedListing.imageUrls[0]}
                    alt="Related Listing"
                  />
                  <span>{relatedListing.listingTitle}</span>
                </a>
              )
          )}
        </div>
      )}
    </>
  );
};
