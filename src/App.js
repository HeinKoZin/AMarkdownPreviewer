import React from "react";
import "./styles.css";
import Header from "./Components/Header";
import Editor from "./Components/Editor";
import Preview from "./Components/Preview";
import Main from "./Components/Main";

class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Main>
          <Editor/>
          <Preview/>
        </Main>
      </div>
    );
  }
}


export default App;
