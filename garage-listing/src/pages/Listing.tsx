import { useEffect, useState } from "react";
import { getListingData, getUser } from "../lib/DataSource/DataSource";
import { useParams } from "react-router-dom";
import * as ResponseTypes from "../lib/types/ResponseTypes";
import { ImageGallery } from "../components/ImageGallery/ImageGallery";
import { ProductDetailsSection } from "../components/ProductDetailsSection/ProductDetailsSection";
import { ProductBiddingSection } from "../components/ProductBiddingSection/ProductBiddingSection";

export const Listing: React.FC = () => {
  const { listingId } = useParams();
  const [listing, setListing] = useState<ResponseTypes.GetListingResponse>();
  const [userInfo, setUserInfo] = useState<ResponseTypes.GetUserResponse>();

  useEffect(() => {
    const fetchListing = async () => {
      if (listingId) {
        const data = await getListingData(listingId);
        setListing(data.result.listing);
      }
    };
    fetchListing();
  }, [listingId]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (listing?.userId) {
        const data = await getUser(listing.userId);
        setUserInfo(data);
      }
    };
    fetchUserInfo();
  }, [listing?.userId]);

  return (
    <>
      {listing && listing.imageUrls && listing.imageUrls.length > 0 && (
        <ImageGallery imageSources={listing.imageUrls} />
      )}

      {/* Product details and bidding section laid out similarly to the image split */}
      <div className="flex mt-4 max-w-[1440px] mx-auto">
        {/* Left: Product description */}
        <div className="w-full md:w-1/2">
          <ProductDetailsSection
            listingTitle={listing?.listingTitle}
            description={listing?.listingDescription}
            mileage={listing?.mileage}
            brand={listing?.itemBrand}
            pumpTest={listing?.hasPumpTest}
            location={listing?.addressState}
            sellerName={userInfo?.displayName}
          />
        </div>

        {/* Right: Bidding section */}
        <div className="w-full md:w-1/2">
          <ProductBiddingSection
            currentPrice={""}
            buyerPremiumPrice={""}
            onQuickBid={() => {
              // Implement quick bid functionality here
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Listing;
