import React from "react";
import ChatView from "../ChatView/ChatView";
import style from "../ChatList/ChatList.module.scss";

const UserList = ({ users }) => {
  return (
    <div className={style.content}>
      {users.map((user) => (
        <ChatView user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
