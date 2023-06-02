import { Search } from './search';
import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <nav className="flex justify-center w-full">
        <Search />
      </nav>
      <main className="w-full">{children}</main>
    </>
  );
};
