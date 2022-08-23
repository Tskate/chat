import React, { createContext, useEffect, useState } from "react";
import ContactsContentPart from "../ContactsContentPart/ContactsContentPart";
import style from "./MainPage.module.scss";
import OpenChat from "../OpenChat/OpenChat";
import Notification from "../Notification/Notification";
import { useContactList } from "../../hooks/useContactList";

export const ChatContext = createContext();

const MainPage = () => {
  const { contactList, setContactList } = useContactList();
  const [user, setUser] = useState();
  const [newMessage, setNewMessage] = useState(null);
  const [notification, setNotification] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  function openChat(userId) {
    setUser(userId);
    setIsChatOpen(true);
  }
  function hideChat() {
    setIsChatOpen(false);
  }

  function getNewMessage(fromId) {
    setTimeout(() => {
      fetch("https://api.chucknorris.io/jokes/random")
        .then((res) => res.json())
        .then((data) => {
          setNewMessage({ from: fromId, text: data.value });
        });
    }, 10000);
  }

  useEffect(() => {
    if (newMessage) {
      const newMsg = { text: newMessage.text, date: Date.now(), isReceived: 1 };
      let foundUser = contactList.filter((u) => u.id === newMessage.from)[0];
      foundUser.dialogHistory.push(newMsg);
      let userList = contactList;
      userList = userList.map((u) =>
        u.id === newMessage.from ? foundUser : u
      );
      setContactList(userList);
      setNotification({
        icon: foundUser.icon,
        name: foundUser.name,
        text: newMsg.text,
      });
    }
  }, [newMessage]);

  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        closeNotification();
      }, 5000);
    }
  }, [notification]);

  function closeNotification() {
    setNotification(null);
  }

  return (
    <div className={style.content}>
      <ChatContext.Provider value={{ openChat, contactList, setContactList }}>
        <ContactsContentPart
          styleForAdaptive={isChatOpen ? style.hidden : ""}
        />
        <OpenChat
          userId={user}
          getNewMessage={getNewMessage}
          hideChat={hideChat}
          styleForAdaptive={isChatOpen ? "" : style.hidden}
        />
      </ChatContext.Provider>
      <Notification
        hide={notification ? {} : { display: "none" }}
        content={notification}
        close={closeNotification}
      />
    </div>
  );
};

export default MainPage;
