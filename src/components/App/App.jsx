import React from "react";
import { UserBadge } from "../UserBadge/UserBadge";

function App() {
  return (
    <div className="App">
      <h1>Добро пожаловать в React-приложение!</h1>
      <p>Это ваш первый собственный компонент.</p>
      <UserBadge
        name="Артём Архипов"
        profession="Frontend Developer"
        city="Казань"
      />
      <UserBadge
        name="Руслан Чехута"
        profession="Frontend Developer"
        city="Украина"
      />

      {/* TODO: Добавьте ещё один экземпляр UserBadge с вашими данными */}
    </div>
  );
}

export default App;
