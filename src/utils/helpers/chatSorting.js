export function chatSorting(chats) {
  console.log(chats);
  return chats.sort(
    (a, b) => b.dialogHistory.at(-1).date - a.dialogHistory.at(-1).date
  );
}
