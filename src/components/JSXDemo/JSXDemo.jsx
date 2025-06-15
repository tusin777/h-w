// TODO: Реализуйте здесь примеры из урока 1.5 "JSX: синтаксис и правила"
export default function JSXDemo() {
  const name = "ruslan";
  const element = <h2>Заголовок</h2>;

  const htmlString = "<b>Опасный HTML</b>";

  const arr = ["cat", "dog", "mouse"];

  return (
    <div>
      {/* TODO: Здесь будут ваши демонстрации JSX! */}
      {name}
      {element}
      {1 + 2}
      <img src="" alt="..." />

      <label htmlFor="">test</label>
      <input type="checkbox" checked />

      <ul>
        {arr.map((e, key) => (
          <li key={key}>{e}</li>
        ))}
      </ul>
      <div style={{ color: "green", fontWeight: 700 }}>
        Текст с inline-стилем
      </div>
      <div>{htmlString}</div>
    </div>
  );
}
