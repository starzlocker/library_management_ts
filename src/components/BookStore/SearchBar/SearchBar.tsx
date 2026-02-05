import type { Dispatch, SetStateAction } from "react";

type Props = {
  searchTerm: string,
  setSearchTerm: Dispatch<SetStateAction<string>>
}

export const SearchBar = ({ searchTerm, setSearchTerm }:Props) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <button type="submit">
        TODO: ICONE LUPA
      </button>
    </div>
  );
};