import React from 'react';
import ReactDOM from 'react-dom';
import Card from './App';

const App=()=>{
  return(
    <div>
      <Card
        title="My Space 1"
        text="I love the space a lot"
        link1="https://www.google.com/"
        link2="https://www.bing.com/?FORM=VDMHHP"
        image="https://th.bing.com/th/id/R.162a5f27d09a276ce92aa7a0b459c7f8?rik=pyBe9f08tTtLqQ&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2016%2f09%2fSpace-Computer-Backgrounds.jpg&ehk=6%2ft5%2fF%2fNo1SoSuL3DX%2f0on8velYzL73p9rUN2HgiaCc%3d&risl=&pid=ImgRaw&r=0"/>
      <Card 
        title="My Space 2"
        text="The space is amazing"
        link1="https://www.google.com/"
        link2="https://www.bing.com/?FORM=VDMHHP"
        image="https://th.bing.com/th/id/OIP.M9h1vYFEthdptFqUN7d3ZwHaEo?pid=ImgDet&rs=1"/>
      <Card 
        title="My Space 3"
        text="Love space"
        link1="https://www.google.com/"
        link2="https://www.bing.com/?FORM=VDMHHP"
        image="https://th.bing.com/th/id/OIP.3FiY2oU_N9PQCPHEnrO-gwHaEK?pid=ImgDet&rs=1"/>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

