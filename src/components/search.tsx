import { useState, useEffect } from 'react';
import { UserDataType } from '../../types';
import Link from 'next/link';
import { getSearchData } from '../utils/apis';

const checkInput = (text: string) => {
  return /[^\s]/gim.test(text);
};
export const Search: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [usersArray, setUsersArray] = useState<UserDataType[]>([]);
  const [searchError, setSearchError] = useState<boolean>(false);

  const hendlerSearch = async () => {
    if (searchText) {
      try {
        const data = await getSearchData(searchText);
        if (!data.total) {
          setSearchError(true);
          setUsersArray([]);
        } else {
          setSearchError(false);
          setUsersArray(data.users);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setUsersArray([]);
      setSearchError(false);
    }
  };

  const getImputText = (text: string) => {
    if (checkInput(text)) {
      setSearchText(text);
    } else {
      setSearchText('');
    }
  };

  const clearResult = () => {
    setUsersArray([]);
    setSearchText('');
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      hendlerSearch();
    }, 400);
    return () => clearTimeout(debounce);
  }, [searchText]);

  return (
    <div
      className={
        'text-white h-8  flex flex-col justify-center items-center relative py-10'
      }>
      <div>
        <label>
          Search
          <input
            id="searchImput"
            className={'w-64 h-8 text-black rounded-md  mx-5  px-5 z-10'}
            value={searchText}
            onChange={(e) => {
              getImputText(e.target.value);
            }}></input>
        </label>
      </div>
      <ul
        className={
          'bg-white text-black rounded-md absolute right-5 top-16 w-64  overflow-hidden'
        }>
        {searchError ? (
          <li className={'py-1 px-5'}>notFound</li>
        ) : (
          <>
            {usersArray.map((el: any) => {
              return (
                <Link
                  href={`/user/${el.id}`}
                  onClick={clearResult}
                  key={`${el.lastName}${el.id}`}>
                  <li className={'py-1 px-5 hover:bg-red-400'}>
                    <span className={'mr-2'}>
                      {el.firstName} {el.lastName}
                    </span>
                  </li>
                </Link>
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
};
