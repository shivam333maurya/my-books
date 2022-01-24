import type { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import { fetchData } from "utils/api";
import { Book } from "interfaces";
// import { LOCAL_STORAGE } from "utils/constant";
import Card from "components/Card";
import Loader from "components/loader";

const Home: NextPage = () => {
  const [books, setBooks] = useState<Book[] | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const filteredBooks = (books || []).filter((book) =>
    `${book.title.toLowerCase()} + ${book.authors
      .join("")
      .toLowerCase()}`.includes(searchInput.trim().toLowerCase())
  );

  useEffect(() => {
    fetchBooksData();
  }, []);

  const fetchBooksData = async () => {
    setLoading(true);
    const books = await fetchData(
      "https://run.mocky.io/v3/d7f02fdc-5591-4080-a163-95a08ce6895e"
    );

    if (books) {
      // localStorage.setItem(LOCAL_STORAGE.BOOKS_DATA, JSON.stringify(books));
      setBooks(JSON.parse(JSON.stringify(books)));
    }
    setLoading(false);
  };

  const handleInputChange = (value: string) => {
    setSearchInput(value);
  };

  const x = 10001000;
  const s = JSON.stringify(x);
  console.log(s);

  return (
    <div className="px-4 py-6 w-full">
      {loading ? (
        <Loader />
      ) : (
        <>
          <SearchBar
            handleInputChange={(value: string) => handleInputChange(value)}
            value={searchInput}
          />
          {Boolean(searchInput) && Boolean(!filteredBooks.length) ? (
            <div>
              <h2>No Result Found for {searchInput}</h2>
            </div>
          ) : (
            <div className="mt-6 grid justify-center xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {filteredBooks?.length &&
                filteredBooks.map((item) => (
                  <Card key={item.title} book={item} />
                ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
