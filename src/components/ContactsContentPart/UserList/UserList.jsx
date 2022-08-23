import React from "react";
import style from "./UserList.module.scss";
import UserView from "../../UserView/UserView";

const UserList = ({ users }) => {
  return (
    <div className={style.content}>
      {users.map((user) => (
        <UserView user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
