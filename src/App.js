import style from "./App.module.scss";
import ContactsContentPart from "./components/ContactsContentPart/ContactsContentPart";
import OpenChat from "./components/OpenChat/OpenChat";

function App() {
  return (
    <div className={style.App}>
      <ContactsContentPart />
      <OpenChat />
    </div>
  );
}

export default App;
