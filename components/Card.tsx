import { Book } from "interfaces";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { formatCurrency, getFormattedDate } from "utils/helpers";
import BookIcon from "assets/book";

interface CardProps {
  book: Book;
}
const Card = ({ book }: CardProps) => {
  const [isImgError, setImageError] = useState(false);

  const router = useRouter();
  const handleReadMore = () => {
    const pathname = router.pathname;
    router.push(encodeURI(book.title));
  };

  return (
    <div className="card flex justify-between bg-slate-700 max-w-xs rounded-lg border border-white">
      {!book?.thumbnailUrl || isImgError ? (
        <div className="flex items-center h-full flex-col">
          <BookIcon />
          <h4 className="mb-3 text-xl text-amber-100 font-bold tracking-tight">
            No cover available
          </h4>
        </div>
      ) : (
        <img
          className="rounded-tr-lg rounded-tl-lg"
          src={book.thumbnailUrl}
          onError={() => setImageError(true)}
        />
      )}
      <div className="px-6 py-3">
        <h4 className="text-slate-100">{book.title}</h4>

        <h4 className="mb-3 overflow-hidden leading-normal text-orange-200 text-md text-ellipsis whitespace-nowrap">
          {book.authors.join(", ")}
        </h4>
        <div className="flex justify-between">
          <h4 className="mb-3 font-semibold tracking-tight text-orange-300 text-md">
            Pusblished
          </h4>
          <p className="leading-normal text-orange-300 text-md">
            {getFormattedDate(book.published.$date)}
          </p>
        </div>
        <div className="flex justify-between">
          <h4 className="mb-3 font-semibold tracking-tight text-orange-300 text-md">
            Price
          </h4>
          <p className="leading-normal text-orange-300 text-md">
            {formatCurrency(book.published.price, book.published.currency)}
          </p>
        </div>
      </div>
      <button
        onClick={handleReadMore}
        className="px-4 py-2 mx-4 mb-3 font-semibold text-slate-200 bg-transparent border border-gray-500 rounded hover:bg-gray-500 hover:text-white hover:border-transparent"
      >
        Read More
      </button>

      {/* </div> */}
    </div>
  );
};

export default Card;
