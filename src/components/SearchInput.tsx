import { ChangeEvent } from "react";

import SearchIcon from "@/components/icons/Search";

type SearchInputProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div className="relative mt-4 rounded-lg bg-[#1d1e1f] md:mt-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon />
      </div>

      <input
        type="search"
        className="block w-full bg-transparent p-4 pl-10 text-sm text-white"
        placeholder="Search by planet or name"
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
