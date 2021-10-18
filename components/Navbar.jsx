import Link from "next/link";
import { useState } from "react";

export default function Navbar({ title, search, setData, data }) {
  const [searchValue, setSearchValue] = useState("");
  const submitSearch = (e) => {
    e.preventDefault();
    setData(data.filter((el) => el.name === searchValue));
  };
  return (
    <div className="border-t border-b pb-5 mb-5">
      <div className="container mx-auto text-left p-2">
        <Link href="/">
          <a>
            <h1 className="text-xl font-bold">{title}</h1>
          </a>
        </Link>
        {search ? (
          <form onSubmit={(e) => submitSearch(e)} className="mt-2">
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <button
                type="submit"
                className="absolute inset-y-0 left-0 flex items-center pl-2"
              >
                <i className="p-1 focus:outline-none focus:shadow-outline fa fa-search" />
              </button>
              <input
                type="search"
                name="q"
                className="py-2 text-sm text-white rounded-md pl-10 w-full focus:outline-none bg-gray-200 focus:text-gray-900"
                placeholder="Search..."
                autoComplete="off"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
