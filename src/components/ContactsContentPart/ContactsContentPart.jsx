import React, { createContext, useState, useEffect } from "react";
import Header from "./Header/Header";
import ChatsBox from "./ChatsBox/ChatsBox";
import { defaultContactList } from "../../utils/constants/defaultContactList";

export const SearchContext = createContext();

const ContactsContentPart = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [request, setRequest] = useState("");

  useEffect(() => {
    if (request !== "") {
      setSearchResult(
        defaultContactList.filter((user) =>
          user.name.toLowerCase().match(request.toLowerCase())
        )
      );
      console.log(searchResult);
    }
  }, [request]);

  return (
    <div>
      <SearchContext.Provider value={{ request, setRequest }}>
        <Header />
        <ChatsBox searchResult={searchResult} />
      </SearchContext.Provider>
    </div>
  );
};

export default ContactsContentPart;
