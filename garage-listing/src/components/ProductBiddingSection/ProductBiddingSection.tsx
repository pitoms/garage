interface ProductBiddingSectionProps {
  loggedIn?: boolean;
  currentPrice: string;
  buyerPremiumPrice: string;
  onQuickBid: () => void;
}

export const ProductBiddingSection: React.FC<ProductBiddingSectionProps> = ({ currentPrice, buyerPremiumPrice, onQuickBid }) => {
  return (
    <div className="w-full flex flex-col">
      <p className="text-sm md:text-base font-semibold">Current Bid: {currentPrice}</p>
      <p className="text-sm md:text-base">With Buyer's Premium: {buyerPremiumPrice}</p>

      <div className="mt-2">
        <button onClick={onQuickBid} className="bg-black text-white h-10 my-1 px-3 py-1 rounded-md w-full">
          Place Bid
        </button>
        <button onClick={onQuickBid} className="bg-black text-white h-10 my-1 px-3 py-1 rounded-md w-full">
          Add to Watchlist
        </button>
      </div>
    </div>
  );
};
