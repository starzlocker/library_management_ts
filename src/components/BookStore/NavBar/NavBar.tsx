import { type ReactNode } from 'react';
import library from '@/assets/library.svg';

type Props = {
  children?: ReactNode
}

export const NavBar = ({ children }:Props) => {
  return (
    <header>
      <div className="nav-title">
        <img src={library} alt='Livros empilhados'/>
        <h1 className="text-3x1">Library Model</h1>
      </div>
      <nav>
        {children}
      </nav>
    </header>
  );
};