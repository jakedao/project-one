const testPage = (currentPage) => {
  const maxPage = 7;
  const maxRanges = 2;
  const possiblePages = [];

  for (let i = currentPage; i < maxPage; i++) {
    if (possiblePages.length >= 2) return possiblePages;
    const prevVal = i - 1;
    const nextVal = i + 1;

    if (prevVal < currentPage && prevVal > 0) {
      possiblePages.push(prevVal);
    }

    if (nextVal > currentPage && nextVal - currentPage < maxRanges) {
      possiblePages.push(nextVal);
    }
  }

  return possiblePages;
};

console.log(testPage(4));
