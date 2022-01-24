import { useEffect, useMemo, useState } from "react";
import { Book } from "interfaces";
import BookIcon from "assets/book";
import { useRouter } from "next/router";
import { fetchData } from "utils/api";
import Loader from "components/loader2";

const BookDetails = () => {
  const router = useRouter();
  const [books, setBooks] = useState<Book[] | null>(null);
  const [isImgError, setImageError] = useState(false);
  const title = router.query.title;

  const bookDetail = useMemo(() => {
    return books?.find((book) => book.title === (title as string));
  }, [[books, title]]);

  useEffect(() => {
    fetchBooksData();
  }, []);

  const fetchBooksData = async () => {
    const books = await fetchData(
      "https://run.mocky.io/v3/d7f02fdc-5591-4080-a163-95a08ce6895e"
    );
    if (books) {
      // localStorage.setItem(LOCAL_STORAGE.BOOKS_DATA, JSON.stringify(books));
      setBooks(JSON.parse(JSON.stringify(books)));
    }
  };
  console.log({ bookDetail });
  return (
    <div>
      {books ? (
        <div className="details flex flex-col items-center">
          <div className="mt-3 flex delay-1000 items-center h-full flex-col">
            {!bookDetail?.thumbnailUrl || isImgError ? (
              <BookIcon />
            ) : (
              <img
                className="rounded-lg"
                src={bookDetail.thumbnailUrl}
                onError={() => setImageError(true)}
              />
            )}
          </div>
          <h1 className="mt-3 text-xl font-semibold	 text-orange-300">
            {bookDetail?.title}
          </h1>
          <p className="details px-4 mt-4 text-slate-300">
            {bookDetail?.longDescription || bookDetail?.shortDescription}
          </p>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default BookDetails;
