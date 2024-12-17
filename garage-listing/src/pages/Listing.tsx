import { useEffect, useState } from "react"
import { getListingData } from "../lib/DataSource/DataSource"
import { useParams } from "react-router-dom";
import * as ResponseTypes from "../lib/types/ResponseTypes"
import { ImageGallery } from "../components/ImageGallery/ImageGallery";

function Listing() {
  const {listingId} = useParams();
  const [listing, setListing] = useState<ResponseTypes.GetListingResponse>();

  useEffect(()=>{
    const fetchListing = async ()=>{
      if(listingId){
        const data = await getListingData(listingId);
        setListing(data.result.listing)
      }
    }
      fetchListing();

  },[listingId])

  return (
   <div className="">
   {listing && listing.imageUrls && listing?.imageUrls.length >0  &&  <ImageGallery imageSources={listing.imageUrls} /> }
   </div>
  )
}

export default Listing
