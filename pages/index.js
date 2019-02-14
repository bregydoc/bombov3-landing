import styled from "styled-components";
import Front from "../components/Front";
import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import MobileView from "../components/MobileView";

const Body = styled.div`
  background-color: #0b1217;
  display: block;
  width: 100%;
  overflow: hidden;
`;

class Home extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <Front />
        <Body>
        <MobileView onEnter={() => (this.startCounter ? this.startCounter() : null)} onLeave={() => console.log("AAA")}/>

        </Body>

        <Footer />
      </div>
    );
  }
}

export default Home;
