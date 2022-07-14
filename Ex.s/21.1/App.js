import { useRef, useState } from "react";

function App() {
  const [Input,setInput]=useState(false);
  const [text,setText]=useState("");
  const inputRef=useRef();

  const inputFocus=()=>{
    setInput(!Input);
        if (Input) {
            inputRef.current.focus();
        }
  }
  return(
    <div>
      {Input?
      <input ref={inputRef} value={text} onChange={e=>setText(e.target.value)}/>
      :text}
      <button onClick={inputFocus}>{Input?'Save':'Edit'}</button>
    </div>
  )
}

export default App;