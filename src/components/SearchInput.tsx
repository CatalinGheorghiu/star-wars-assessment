import { ChangeEvent } from "react";

import SearchIcon from "@/components/icons/Search";

type SearchInputProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div className="relative mt-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon />
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Search by planet or name"
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
