import { useEffect, useState } from "react";
import { defaultContactList } from "../utils/constants/defaultContactList";

export function useContactList() {
  const [contactList, setContactList] = useState(
    JSON.parse(localStorage.getItem("contacts")) || defaultContactList
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactList));
  }, [contactList]);

  return { contactList, setContactList };
}
