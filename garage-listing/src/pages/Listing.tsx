import { useEffect, useState } from "react";
import {
  getListingData,
  getRelatedListings,
  getUser,
} from "../lib/DataSource/DataSource";
import { useParams } from "react-router-dom";
import * as ResponseTypes from "../lib/types/ResponseTypes";
import { ImageGallery } from "../components/ImageGallery/ImageGallery";
import { ProductDetailsSection } from "../components/ProductDetailsSection/ProductDetailsSection";
import { ProductBiddingSection } from "../components/ProductBiddingSection/ProductBiddingSection";
import { ProductRelatedSection } from "../components/ProductRelatedSection/ProductRelatedSection";
import loadingImage from "../assets/truck.webp"; // Example loading image

export const Listing: React.FC = () => {
  const { listingId } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [listing, setListing] = useState<ResponseTypes.GetListingResponse>();
  const [userInfo, setUserInfo] = useState<ResponseTypes.GetUserResponse>();
  const [relatedListings, setRelatedListings] =
    useState<ResponseTypes.GetListingResponse[]>();

  useEffect(() => {
    const fetchAllData = async () => {
      setIsLoading(true);
      try {
        if (listingId) {
          const [listingData, relatedData] = await Promise.all([
            getListingData(listingId),
            getRelatedListings(listingId),
          ]);
          setListing(listingData.result.listing);
          setRelatedListings(relatedData.result.relatedListings);

          if (listingData.result.listing?.userId) {
            const userData = await getUser(listingData.result.listing.userId);
            setUserInfo(userData);
          }
        }
      } catch (error) {
        console.error("Failed to fetch listing data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, [listingId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img
          src={loadingImage}
          alt="Loading..."
          className="animate-glow w-100 h-100"
        />
      </div>
    );
  }

  return (
    <>
      {/* Image Gallery */}
      {listing?.imageUrls && listing.imageUrls.length > 0 && (
        <ImageGallery imageSources={listing.imageUrls} />
      )}

      {/* Product details and bidding sections */}
      <div className="flex-col md:flex-row flex mt-4 px-2 max-w-[1440px] mx-auto">
        <div className="w-full md:w-1/2">
          <ProductDetailsSection
            listingTitle={listing?.listingTitle}
            description={listing?.listingDescription}
            mileage={listing?.mileage}
            brand={listing?.itemBrand}
            pumpTest={listing?.hasPumpTest}
            tankSize={listing?.tankSize}
            location={listing?.addressState}
            sellerName={userInfo?.displayName}
          />
        </div>
        <div className="w-full mt-4 md:mt-0 md:w-1/2">
          <ProductBiddingSection
            currentPrice={listing?.sellingPrice}
            buyerPremiumPrice={listing?.sellingPrice}
            onQuickBid={() => {
              // Implement quick bid functionality here
            }}
          />
        </div>
      </div>

      {/* Related Listings */}
      <div className="flex-col mt-4 px-2 max-w-[1440px] mx-auto">
        <ProductRelatedSection relatedListings={relatedListings} />
      </div>
    </>
  );
};

export default Listing;
