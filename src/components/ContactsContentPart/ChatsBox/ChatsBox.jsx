import React, { useContext } from "react";
import style from "./ChatsBox.module.scss";
import ChatList from "../ChatList/ChatList";
import { filterChats } from "../../../utils/helpers/filterChat";
import UserList from "../UserList/UserList";
import { SearchContext } from "../ContactsContentPart";
import { ChatContext } from "../../MainPage/MainPage";

const ChatsBox = ({ searchResult }) => {
  const { contactList } = useContext(ChatContext);
  const { request } = useContext(SearchContext);

  function renderList() {
    return searchResult && request !== null ? (
      <UserList users={searchResult} />
    ) : (
      <ChatList chats={filterChats(contactList)} />
    );
  }
  return (
    <div className={style.container}>
      <div
        className={style.title}
        style={searchResult && request !== null ? { display: "none" } : {}}
      >
        Chats
      </div>
      {renderList()}
    </div>
  );
};

export default ChatsBox;
