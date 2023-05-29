import { Inter } from 'next/font/google';
import { MainLayout } from '../components/main';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import Users from './users';

const inter = Inter({ subsets: ['latin'] });

const Home: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Users />
      </MainLayout>
    </QueryClientProvider>
  );
};

export default Home;
