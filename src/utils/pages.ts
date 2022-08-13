export const getPagesCOunt = (totalCount: number, limit: number) => {
  return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages: number) => {
  const pagesArray: number[] = []
  for (let i = 0; i < totalPages; i++) {
    pagesArray.push(i + 1)
  }
  return pagesArray
}


