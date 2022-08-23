import React, { createContext, useState, useEffect, useContext } from "react";
import Header from "./Header/Header";
import ChatsBox from "./ChatsBox/ChatsBox";
import { ChatContext } from "../MainPage/MainPage";

export const SearchContext = createContext();

const ContactsContentPart = ({ styleForAdaptive }) => {
  const { contactList } = useContext(ChatContext);
  const [searchResult, setSearchResult] = useState(null);
  const [request, setRequest] = useState(null);

  useEffect(() => {
    if (request !== null) {
      setSearchResult(
        contactList.filter((user) =>
          user.name.toLowerCase().match(request.toLowerCase())
        )
      );
    }
  }, [request]);

  return (
    <div className={styleForAdaptive}>
      <SearchContext.Provider value={{ request, setRequest }}>
        <Header />
        <ChatsBox searchResult={searchResult} />
      </SearchContext.Provider>
    </div>
  );
};

export default ContactsContentPart;
