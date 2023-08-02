import React from "react";
import Header from "../components/header";
import Content from "../components/Content";

class Home extends React.Component {

    render() {
      return (
        <div>
            <Header />
            <Content />
        </div>
      );
    }
  }
  
  export default Home;