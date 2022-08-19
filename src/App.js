import style from "./App.module.scss";
import ContactsContentPart from "./components/ContactsContentPart/ContactsContentPart";
import OpenChat from "./components/OpenChat/OpenChat";
import { createContext, useState } from "react";

export const ChatContext = createContext();

function App() {
  const [user, setUser] = useState();

  function openChat(userId) {
    setUser(userId);
  }
  return (
    <div className={style.App}>
      <ChatContext.Provider value={{ openChat: openChat }}>
        <ContactsContentPart />
      </ChatContext.Provider>
      <OpenChat user={user} />
    </div>
  );
}

export default App;
