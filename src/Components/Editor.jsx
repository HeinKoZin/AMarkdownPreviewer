import React from 'react';


class Editor extends React.Component{
  
  render(){
    return(
      <div className="col-md-6">
        <h4>Editor</h4>
        <textarea id="editor"></textarea>
      </div>
    )
  }
}


export default Editor;