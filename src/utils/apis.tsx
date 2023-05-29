export const getUsers = async (page: number) => {
  const response = await fetch(
    `https://dummyjson.com/users?limit=10&skip=${(page - 1) * 10}`,
  );
  const { users } = await response.json();
  return users;
};

export const getSearchData = async (searchText: string) => {
  const response = await fetch(
    `https://dummyjson.com/users/search?q=${searchText}`,
  );
  const data = await response.json();
  return data;
};
