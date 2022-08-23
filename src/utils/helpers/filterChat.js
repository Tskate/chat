export const filterChats = (users) => {
  return users.filter((user) => user.dialogHistory.length);
};
