import { GetServerSideProps } from 'next';
import { UserDataType } from '../../../types';
import { MainLayout } from '@/components/main';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../../components/button';
import { UserDataItem } from '../../components/user-data-item';
type UsersProps = {
  user: UserDataType;
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  const response = await fetch(`https://dummyjson.com/users/${params.id}`);
  const user = await response.json();
  return {
    props: { user },
  };
};

const User: React.FC<UsersProps> = ({ user }) => {
  return (
    <MainLayout>
      <div
        className={
          'my-10 mx-auto w-1/4 flex flex-col items-center gap-5 bg-spicy-pink rounded-lg p-5'
        }>
        <Image
          src={user.image}
          width={400}
          height={400}
          alt="Picture"
          priority={false}
        />
        <h1 className={'text-5xl'}>
          {user.firstName} {user.lastName}
        </h1>
        <div>
          <UserDataItem text="email" value={user.email} />
          <UserDataItem text="phone" value={user.phone} />
          <UserDataItem text="age" value={user.age} />
          <UserDataItem text="address" value={user.address.address} />
          <UserDataItem text="city" value={user.address.city} />
          <UserDataItem text="state" value={user.address.state} />
        </div>
        <Link href={`/`}>
          <Button value="Go back to users" />
        </Link>
      </div>
    </MainLayout>
  );
};

export default User;
