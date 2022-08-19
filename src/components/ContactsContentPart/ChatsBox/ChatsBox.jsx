import React from "react";
import style from "./ChatsBox.module.scss";
import ChatList from "../ChatList/ChatList";
import { defaultContactList } from "../../../utils/constants/defaultContactList";
import { defaultDialogHistory } from "../../../utils/constants/defaultDialogHistory";
import { filterChats } from "../../../utils/helpers/filterChat";
import UserList from "../UserList/UserList";

const ChatsBox = ({ searchResult }) => {
  function renderList() {
    return searchResult ? (
      <UserList users={searchResult} />
    ) : (
      <ChatList chats={filterChats(defaultContactList)} />
    );
  }
  return (
    <div className={style.container}>
      <div className={style.title}>Chats</div>
      {renderList()}
    </div>
  );
};

export default ChatsBox;
