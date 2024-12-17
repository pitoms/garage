import { formatToDollar } from "../../lib/utils/utils";

interface ProductBiddingSectionProps {
  loggedIn?: boolean;
  currentPrice?: number;
  buyerPremiumPrice?: number;
  onQuickBid: () => void;
}

export const ProductBiddingSection: React.FC<ProductBiddingSectionProps> = ({
  currentPrice,
  buyerPremiumPrice,
  onQuickBid,
}) => {
  return (
    <div className="w-full flex flex-col">
      <span className="justify-between text-xl">Current Bid: </span>
      <span className="font-bold text-xl mt-2">
        {currentPrice && formatToDollar(currentPrice)}
      </span>
      {buyerPremiumPrice && (
        <span className="text-sm">
          w/ Buyer's Premium: {formatToDollar(buyerPremiumPrice)}
        </span>
      )}
      <div className="w-full flex flex-col">
        <div className="mt-2">
          <button
            onClick={onQuickBid}
            className="hover:bg-white hover:text-black bg-black text-sm text-white h-10 my-1 px-3 py-1 rounded-md w-full border-blk-100"
          >
            Place Bid
          </button>
          <button
            onClick={onQuickBid}
            className="hover:bg-white hover:text-black bg-black text-sm text-white h-10 my-1 px-3 py-1 rounded-md w-full"
          >
            Add to Watchlist
          </button>
          <button
            onClick={onQuickBid}
            className="hover:bg-white hover:text-black bg-black text-sm text-white h-10 my-1 px-3 py-1 rounded-md w-full"
          >
            Quote Shipping, Warranty, or Insurance
          </button>
        </div>
      </div>
    </div>
  );
};
