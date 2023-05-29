import { useEffect, useState } from 'react';
import { buildBtnArray } from '../utils/paginationBuild';
import { Button } from './button';
type PaginationProps = {
  curentPage: number;
  changePage: any;
  numberOfPages: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  curentPage,
  changePage,
  numberOfPages,
}) => {
  const [paginationArray, setPaginationArray] = useState<(number | string)[]>(
    [],
  );

  useEffect(() => {
    setPaginationArray(buildBtnArray(numberOfPages, curentPage));
  }, [curentPage]);

  const handle = (event: React.BaseSyntheticEvent) => {
    const action: string = event.target.innerText;
    if (event.target.nodeName === 'BUTTON') {
      if (action === 'prev' && curentPage > 1) {
        changePage(curentPage - 1);
      } else if (action === 'next' && curentPage < numberOfPages) {
        changePage(curentPage + 1);
      } else if (
        action !== 'prev' &&
        action !== 'next' &&
        +action !== curentPage
      ) {
        changePage(+action);
      }
    }
  };

  return (
    <div className={'mt-5 mx-0 mb-0 '}>
      <ul className={'flex justify-center items-center gap-3'} onClick={handle}>
        <li>
          <Button value="prev" active={false} />
        </li>
        {paginationArray.map((el, index) =>
          typeof el === 'number' ? (
            <li key={el}>
              <Button value={el} active={el === curentPage} />
            </li>
          ) : (
            <li key={el + index}>...</li>
          ),
        )}
        <li>
          <Button value="next" active={false} />
        </li>
      </ul>
    </div>
  );
};
