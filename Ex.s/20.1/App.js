import {useState} from "react";
import Fetch from "./components/Fetch";

function App() {
  const [showFetch, setShowFetch] = useState(false);
  const [btnText,setbtnText]=useState('Display Data')

    const handleClick = () => {
        setShowFetch(!showFetch);
        if(showFetch){
          setbtnText('Display Data')
        }else{
          setbtnText('Hide Data')
        }
    };

    return (
        <div className="App">
            <button onClick={handleClick}>{btnText}</button>
            {showFetch && <Fetch />}
        </div>
    );
}

export default App;
