import styled from "styled-components";
import Front from "../components/Front";
import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import MobileView from "../components/MobileView";
import Responsive from 'react-responsive';

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
        <Front />

        {/*<MediaQuery maxDeviceWidth={700}>*/}

        {/*</MediaQuery>*/}
          <div>
              <Desktop>Desktop or laptop</Desktop>
              <Tablet>
                  <Body>
                        <MobileView onEnter={() => (this.startCounter ? this.startCounter() : null)} onLeave={() => console.log("AAA")}/>
                  </Body>
              </Tablet>
              <Mobile>
                  <Body>
                        <MobileView onEnter={() => (this.startCounter ? this.startCounter() : null)} onLeave={() => console.log("AAA")}/>
                  </Body>
              </Mobile>
              <Default>Not mobile (desktop or laptop or tablet)</Default>
          </div>



        <Footer />
      </div>
    );
  }
}

export default Home;
