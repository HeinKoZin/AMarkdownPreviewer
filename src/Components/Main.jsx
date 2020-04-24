import React from "react";

class Main extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">{this.props.children}</div>
      </div>
    );
  }
}

export default Main;
