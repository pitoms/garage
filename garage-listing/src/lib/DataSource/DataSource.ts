import axios from "axios";
import * as ResponseTypes from "../types/ResponseTypes"

export const getListingData = async (
listingId: string,
):Promise<{error: string, result: {listing:ResponseTypes.GetListingResponse}}> =>{

    const response = await axios.post<{error: string, result: {listing: ResponseTypes.GetListingResponse}}>('https://garage-backend.onrender.com/getListing',{
        id: listingId,
    })

    return response.data;
}