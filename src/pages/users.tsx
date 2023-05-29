import { useState } from 'react';
import { UserDataType } from '../../types';
import Image from 'next/image';
import Link from 'next/link';
import { Pagination } from '../components/pagination';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../utils/apis';
const Users: React.FC = () => {
  const [curentPage, setCurentPage] = useState<number>(1);
  const [numberOfPages, setNumberOfPages] = useState<number>(10);

  const { data, isLoading, isError } = useQuery(
    ['usersList', curentPage],
    () => getUsers(curentPage),
    {
      keepPreviousData: true,
    },
  );
  const hendle = (page: number) => {
    setCurentPage(page);
  };

  return (
    <div className={'my-0 mx-auto flex flex-col justify-center items-center'}>
      {isLoading ? (
        <span>Loading!!!</span>
      ) : (
        <>
          <ul className={'grid grid-cols-5 grid-rows-2 gap-8'}>
            {data.map((el: UserDataType) => {
              return (
                <li key={`${el.firstName}+${el.id}`}>
                  <Link href={`/user/${el.id}`}>
                    <div
                      className={
                        'flex flex-col justify-center items-center gap-5 bg-spicy-pink rounded-lg p-5 hover:bg-red-400'
                      }>
                      <Image
                        src={el.image}
                        width={200}
                        height={200}
                        alt="Picture"
                        priority={false}
                      />
                      <h3 className={'text-xl'}>
                        {el.firstName} {el.lastName}
                      </h3>
                      <span>{el.id}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Pagination
            curentPage={curentPage}
            changePage={hendle}
            numberOfPages={numberOfPages}
          />
        </>
      )}
    </div>
  );
};

export default Users;
