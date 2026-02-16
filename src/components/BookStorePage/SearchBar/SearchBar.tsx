import { useRef, useState, type Dispatch, type SetStateAction } from 'react';
import { SearchIcon } from '@/components/misc/SearchIcon';
import { Button } from '@/components/misc/Button/Button';
import styles from './SearchBar.module.scss';
import { CloseIcon } from '@/components/misc/CloseIcon';

type Props = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export const SearchBar = ({ searchTerm, setSearchTerm }: Props) => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <div
      className={`${styles['searchbar']} ${active ? styles['active'] : styles['inactive']}`}
    >
      <input
        id={styles['searchbar-input']}
        type='text'
        ref={ref}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onBlur={(e) => {
          if ((!e.currentTarget.contains(e.relatedTarget) && !searchTerm)) {
            setActive(false);
            ref.current?.blur();
          }
        }}
      ></input>
      <button
        id={styles['searchbar-icon']}
        onClick={() => {
          if (!active && ref.current) {
            setActive((prev) => !prev);
            ref.current.focus();
          }
          else if (active && searchTerm) {
            setSearchTerm('');
            setActive(false);
          }
        }}
      >
        {searchTerm ? <CloseIcon size={16}/> : <SearchIcon size='20px' />}
      </button>

    </div>
  );
};
