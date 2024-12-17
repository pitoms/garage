import { useEffect, useState } from "react";
import { getListingData, getUser } from "../lib/DataSource/DataSource";
import { useParams } from "react-router-dom";
import * as ResponseTypes from "../lib/types/ResponseTypes";
import { ImageGallery } from "../components/ImageGallery/ImageGallery";

function Listing() {
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
      if (listingId && listing?.userId) {
        const data = await getUser(listing?.userId);
        setUserInfo(data);
      }
    };
    fetchUserInfo();
  }, [listing?.user?.id]);

  return (
    <>
      <div>
        {listing && listing.imageUrls && listing?.imageUrls.length > 0 && (
          <ImageGallery imageSources={listing.imageUrls} />
        )}
      </div>
      <div>
        <p>
          Hi, I'm {userInfo?.displayName}. I'm selling a {listing?.listingTitle}
          .<br />
          {listing?.mileage} miles, {listing?.hasRust ? "some rust" : "no rust"}
          , {`${listing?.itemBrand} truck.`}{" "}
          {listing?.hasPumpTest && "pump tested,"}
          {`${listing?.tankSize} Gallon Tank.`} Warranty, freight, financing
          available provide by Garage if needed.
        </p>
      </div>

      <button
        type="button"
        data-ripple-light="true"
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      >
        Button
      </button>
    </>
  );
}

export default Listing;
