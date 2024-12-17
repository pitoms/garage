import axios from "axios";
import * as ResponseTypes from "../types/ResponseTypes";

export const getListingData = async (
  listingId: string
): Promise<{
  error: string;
  result: { listing: ResponseTypes.GetListingResponse };
}> => {
  const response = await axios.post<{
    error: string;
    result: { listing: ResponseTypes.GetListingResponse };
  }>("https://garage-backend.onrender.com/getListing", {
    id: listingId,
  });
  return response.data;
};

export const getUser = async (
  userId: string
): Promise<ResponseTypes.GetUserResponse> => {
  const response = await axios.get<ResponseTypes.GetUserResponse>(
    `https://garage-backend.onrender.com/users/${userId}`
  );
  return response.data;
};

export const getRelatedListings = async (
  listingId: string
): Promise<{
  error: string;
  result: { relatedListings: ResponseTypes.GetListingResponse[] };
}> => {
  const response = await axios.post<{
    error: string;
    result: { relatedListings: ResponseTypes.GetListingResponse[] };
  }>("https://garage-backend.onrender.com/getRelatedListings", {
    id: listingId,
  });
  return response.data;
};
