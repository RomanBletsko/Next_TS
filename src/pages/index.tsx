import { Inter } from 'next/font/google';
import { MainLayout } from '../components/main';

import Users from './users';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <MainLayout>
      <Users />
    </MainLayout>
  );
}
import Link from 'next/link'