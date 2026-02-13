import { useRef, useState, type Dispatch, type SetStateAction } from "react";
import { SearchIcon } from "@/components/misc/SearchIcon";
import styles from './SearchBar.module.scss'

type Props = {
  searchTerm: string,
  setSearchTerm: Dispatch<SetStateAction<string>>
}

export const SearchBar = ({ searchTerm, setSearchTerm }:Props) => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLInputElement|null>(null);

  return (
    <div id='searchbar-container' className={`${styles['searchbar']} ${active ? styles['active'] : styles['inactive']}`}>
      <input
        id="searchbar-input"
        type="text"
        ref={ref}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onBlur={() => {
          ref.current?.blur()
          setActive(false)
        }}
      ></input>
      <button id='searchbar-icon' onClick={() => {
        if (!active && ref.current) {
          ref.current.focus()
          setActive(prev => !prev)
        }
      }}>
        <SearchIcon size="20px"/>
      </button>
    </div>
  );
};