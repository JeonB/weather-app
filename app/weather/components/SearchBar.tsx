import React from 'react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  onSearch: () => void
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onSearch,
}) => {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div className="relative mr-3 flex-1">
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          className="focus:ring-primary-300 w-full rounded-lg bg-white px-4 py-2 text-base text-gray-600 transition-all duration-300 focus:ring-2 focus:outline-none sm:text-lg"
        />
      </div>
      <button
        onClick={onSearch}
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl bg-white shadow-md transition-all duration-300 hover:bg-gray-300 sm:h-14 sm:w-14">
        <span className="material-symbols-outlined text-gray-500">search</span>
      </button>
    </div>
  )
}
