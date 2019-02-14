import styled from "styled-components";
import Front from "../components/Front";
import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import MobileView from "../components/MobileView";
import Responsive from 'react-responsive';
import DesktopView from "../components/DesktopView";
import FrontDesktop from "../components/FrontDesktop";

const Body = styled.div`
  background-color: #0b1217;
  display: block;
  width: 100%;
  overflow: hidden;
`;

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class Home extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
          <style jsx global>{`
          @import url("https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600|Muli:300,400,600|Poppins:400,800,900");
          body {
            padding: 0;
            margin: 0;
          }
        `}</style>
              <Desktop>
                  <FrontDesktop />
                  <Body>
                    <DesktopView onEnter={() => (this.startCounter ? this.startCounter() : null)} onLeave={() => console.log("AAA")}/>
                  </Body>
              </Desktop>
              <Tablet>
                  <Front />
                  <Body>
                        <MobileView onEnter={() => (this.startCounter ? this.startCounter() : null)} onLeave={() => console.log("AAA")}/>
                  </Body>
              </Tablet>
              <Mobile>
                  <Front />
                  <Body>
                        <MobileView onEnter={() => (this.startCounter ? this.startCounter() : null)} onLeave={() => console.log("AAA")}/>
                  </Body>
              </Mobile>
              <Default>
                  <FrontDesktop />
                  <Body>
                        <DesktopView onEnter={() => (this.startCounter ? this.startCounter() : null)} onLeave={() => console.log("AAA")}/>
                  </Body>
              </Default>




        <Footer />
      </div>
    );
  }
}

export default Home;
