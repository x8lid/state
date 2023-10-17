import React, { useState } from "react";

const Form = () => {
  const [text, setText] = useState(""); // создание состояния для текстового поля ввода
  const [blur, setBlur] = useState(false); // создание состояния
  const [ButtonDisabled, setButtonDisabled] = useState(true); // создание состояния для активности кнопки
  const [send, setSend] = useState(false);

  const handleChangeText = (e) => {
    setText(e.target.value); // обновляем значение состояния в соответствии с введенным текстом
    setButtonDisabled(e.target.value === ""); // проверяем, является ли поле пустым и обновляем состояние активности кнопки
  };

  const handleBlur = () => {
    if (text === "") {
      setBlur(true); // Если поле ввода пустое, устанавливаем состояние blur в значение true
    }
  };

  const handleFocus = () => {
    setBlur(false); // Устанавливаем состояние blur в значение false при получении фокуса на поле ввода
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(text);
    setText("");
    setSend(true);
  };

  return (
    <div>
      <form>
        <input
          className={blur === true ? "is-error" : ""}
          value={text}
          onChange={(e) => handleChangeText(e)}
          onBlur={() => handleBlur()}
          onFocus={handleFocus}
          placeholder="введите текст"
        />
        <button onClick={handleClick}>Добавить</button>
        {/* добавляем атрибут disabled для отключения кнопки */}
      </form>
      {blur === true ? <div>поле обязательное!</div> : null}
      {send === true ? <div>Сообщение отправлено!</div> : null}
    </div>
  );
};

export default Form;