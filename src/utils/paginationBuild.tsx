export const buildBtnArray = (numberOfPages: number, curentPage: number) => {
  const paginationArray: (number | string)[] = [];
  for (let i = 1; i <= numberOfPages; i++) {
    if (
      i === 1 ||
      i === numberOfPages ||
      i === curentPage ||
      i === curentPage - 1 ||
      i === curentPage + 1 ||
      (curentPage === 1 && i === curentPage + 2) ||
      (curentPage === numberOfPages && i === curentPage - 2)
    ) {
      paginationArray.push(i);
    } else {
      paginationArray.push('...');
    }
  }
  const buttonArray: (number | string)[] = paginationArray.filter(
    (el, index, array) => {
      if (el !== array[index - 1]) {
        return el;
      }
    },
  );
  return buttonArray;
};
