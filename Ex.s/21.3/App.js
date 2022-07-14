import Img from "./components/image";
import Fimg from "./images/1.jpg";
import FBimg from "./images/1black.jpg";
import Simg from "./images/2.JPG";
import SBimg from "./images/2black.JPG";

function App() {
  return (
    <div style={{display:'flex' , justifyContent:'space-around'}}>
      <Img imgColorUrl={Fimg} imgBlackUrl={FBimg}/>
      <Img imgColorUrl={Simg} imgBlackUrl={SBimg}/>
    </div>
  );
}

export default App;
