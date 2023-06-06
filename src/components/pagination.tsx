import { useEffect, useState } from 'react';
import { buildBtnArray } from '../utils/paginationBuild';
import { Button } from './button';
import Link from 'next/link';
type PaginationProps = {
  curentPage: number;
  numberOfPages: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  curentPage,
  numberOfPages,
}) => {
  const [paginationArray, setPaginationArray] = useState<(number | string)[]>(
    []
  );

  useEffect(() => {
    setPaginationArray(buildBtnArray(numberOfPages, curentPage));
  }, [curentPage]);

  return (
    <div className="mt-5 mx-0 mb-0 ">
      <ul className="flex justify-center items-center gap-3">
        <li>
          <Link href={`/?page=${curentPage > 1 ? curentPage - 1 : curentPage}`}>
            <Button value="prev" isDisable={curentPage === 1} />
          </Link>
        </li>
        {paginationArray.map((el, index) =>
          typeof el === 'number' ? (
            <li key={el}>
              <Link
                href={
                  curentPage === el ? `/?page=${curentPage}` : `/?page=${el}`
                }>
                <Button value={el} active={el === curentPage} />
              </Link>
            </li>
          ) : (
            <li key={el + index}>...</li>
          )
        )}
        <li>
          <Link
            href={`/?page=${
              curentPage < numberOfPages ? curentPage + 1 : curentPage
            }`}>
            <Button value="next" isDisable={curentPage === numberOfPages} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
