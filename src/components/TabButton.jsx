export function TabButton(props) {
  function clickHandler (){
    console.log("Hi");
  }

  return (
    <li>
      <button onClick={clickHandler}>{props.children}</button>
    </li>
  );
}
