export function chatSorting(chats) {
  return chats.sort(
    (a, b) =>
      new Date(b.dialogHistory.at(-1).date) -
      new Date(a.dialogHistory.at(-1).date)
  );
}
