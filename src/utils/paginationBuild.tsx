export const buildBtnArray = (numberOfPages: number, curentPage: number) => {
  const paginationArray: (number | string)[] = [];
  for (let i = 1; i <= numberOfPages; i++) {
    if (
      i === 1 ||
      i === 2 ||
      i === numberOfPages ||
      i === numberOfPages - 1 ||
      i === curentPage
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
    }
  );
  return buttonArray;
};
