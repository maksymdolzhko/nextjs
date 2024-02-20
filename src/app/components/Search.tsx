"use client"

import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState<string>('');

  return (
    <div className="relative z-50 mt-4 mb-6">
      <label
        htmlFor="search"
        className="block text-sm font-medium leading-6 text-gray-300"
      >
        Quick search
      </label>
      <div className="relative mt-2 flex items-center">
        <input
          id="search"
          type="text"
          name="search"
          value={search}
          placeholder='Search...'
          onChange={e=>setSearch(e.target.value)}
          className="block w-full rounded-md border-0 px-4 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
            ⌘K
          </kbd>
        </div>
      </div>
    </div>
  );
}
