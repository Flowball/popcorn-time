"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

interface iDefault {
  defaultValue: string | null;
}

const SearchInput = ({ defaultValue }: iDefault) => {
  const router = useRouter();

  const [inputValue, setValue] = useState(defaultValue);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  const handleSearch = () => {
    if (inputValue)
      return router.push(`/search?title=${encodeURIComponent(inputValue)}`);
    if (!inputValue) return router.push("/search");
  };

  const handleKeyPress = (event: { key: any }) => {
    if (event.key === "Enter") return handleSearch();
  };

  return (
    <div className="m-8 flex flex-row items-center gap-5 rounded-[10px] border-2 border-solid border-slate-500 p-1">
      <label htmlFor="inputId"></label>

      <input
        type="text"
        id="inputId"
        placeholder="Enter your keywords"
        value={inputValue || ""}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        className="w-full border-none bg-transparent py-3 pl-2 pr-3 outline-none"
      />
    </div>
  );
};

export default SearchInput;
