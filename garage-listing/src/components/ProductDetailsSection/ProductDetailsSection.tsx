interface ProductDetailsSectionProps {
  listingTitle?: string;
  sellerName?: string;
  description?: string;
  mileage?: number;
  rust?: boolean;
  pumpTest?: boolean;
  tankSize?: number;
  brand?: string;
  location?: string;
}

export const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({
  listingTitle,
  sellerName,
  description,
  mileage,
  rust,
  pumpTest,
  tankSize,
  brand,
  location,
}) => {
  return (
    <div className="mx-auto mr-4">
      <div className="w-full">
        {listingTitle && <p className="text-lg">{listingTitle}</p>}
      </div>
      <div className="w-full mt-4">
        {description && <p className="text-sm">{description}</p>}
      </div>
      {/* Lower Section - structured information*/}
      <div className="mt-2 text-sm flex justify-left">
        {brand && (
          <div className="mr-2">
            <span className="font-bold">Brand: </span>
            <span>{brand}</span>
          </div>
        )}
        {mileage && (
          <div className="mr-2">
            <span className="font-bold">Mileage: </span>
            <span>{mileage} mi</span>
          </div>
        )}
        {tankSize && (
          <div className="mr-2">
            <span className="font-bold">Tank Size: </span>
            <span>{tankSize} Gal</span>
          </div>
        )}
        {rust && (
          <div className="mr-2">
            <span className="font-bold">Rust: </span>
            <span>{rust ? "Some" : "None"}</span>
          </div>
        )}
        {pumpTest && (
          <div className="mr-2">
            <span className="font-bold">Pump Tested: </span>
            <span>{pumpTest ? "Tested" : "Untested"}</span>
          </div>
        )}

        {location && (
          <div className="mr-2">
            <span className="font-bold">Location: </span>
            <span>{location}</span>
          </div>
        )}
      </div>
      <button className="flex">
        <div className="mt-2 text-md text-gray-800">
          <span>⚡ Get an instant quote on freight, warranty or insurance.</span>
        </div>
      </button>
      <button className="flex">
        <div className="mt-2 text-md text-gray-800">
          <span>✉️ Message the seller, {sellerName}.</span>
        </div>
      </button>
    </div>
  );
};

// \  const listingDescription = `Hi, I'm ${userInfo?.displayName}.
// I'm selling a ${listing?.listingTitle}.
// ${listing?.mileage} miles, ${listing?.hasRust ? "some rust" : "no rust"}, ${listing?.itemBrand} truck.
// ${listing?.hasPumpTest ? "Pump tested, " : ""}${listing?.tankSize} Gallon Tank.
// Warranty, freight, and financing available, provided by Garage.`;
