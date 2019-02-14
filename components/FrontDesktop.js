import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import ScrollTrigger from "react-scroll-trigger";

const TextAnim = keyframes`

`;

const BAnim = keyframes`
  0% {
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
`;

const Background = styled.div`
  background-color: #0b1217;
  display: block;
  width: 100%;
  overflow: hidden;
`;

const Video = styled.video`
  vertical-align: middle;
  justify-content: start;
  align-content: center;
  align-items: center;
  height: 100vh;
  //transform: translateX(-50%);
  //left: 50%;
  position: relative;
  z-index: 2;
`;

const VideoFilter = styled.div`
  position: absolute;
  /* min-height: 100%; */
  width: 100%;
  height: 100%;
  z-index: 3;

  /* background: rgb(50, 113, 255);
  background: linear-gradient(
    180deg,
    rgba(50, 113, 255, 0.3) 0%,
    rgba(40, 227, 186, 0.5) 100%
  ); */
  /* opacity: 0.4; */
  /* opacity: 1; */
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  // transform: translateX(100%);
  position: relative;
  z-index: 4;
`;

const BomboLogo = styled.img`
  top: 18px;
  position: absolute;
  z-index: 4;
  height: 52px;
  left: 50%;
  transform: translateX(-50%);
  /* animation: ${BAnim} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; */
`;

const Message = styled.div`
  z-index: 5;
  display: flex;
  background-color: #28e3ba;
  margin-top: -60px;
  padding: 20px 20px;
  width: 100%;
  text-align: center;
  color: #0b1217;
  font-family: "Muli", sans-serif;
  vertical-align: middle;
  flex-flow: column;
  justify-content: center;

  box-shadow: 0px 0px 56px -8px rgba(11, 18, 23, 0.67);
`;

const Title = styled.div`
  z-index: 6;
  position: absolute;
  width: 50%;
   transform: translateX(100%);
  /* height: 100%; */
  padding: 10px 0px;
  bottom: 80px;
  font-weight: 600;
  font-size: 18px;
  font-family: "Muli", sans-serif;
  color: white;
  text-align: left;
  text-transform: uppercase;
  line-height: 23px;
  letter-spacing: 0.7px;
`;

const ActionButton = styled.a`
  margin-top: 18px;
  font-weight: 400;
  font-size: 18px;
  font-family: "Josefin Sans", sans-serif;
  color: white;
  background-color: #3271ff;
  vertical-align: middle;
  width: fit-content;
  padding: 14px 23px 11px 23px;
  flex-flow: column;
  justify-content: center;
  display: flex;
  line-height: initial;
  border: none;
  text-decoration: none;
  box-shadow: 0px 0px 56px -8px rgba(11, 18, 23, 0.4);
  letter-spacing: initial;
  :hover {
    cursor: pointer;
  }
`;

const SuperMessage = styled.div`
  animation: ${TextAnim} 4s linear both;
`;

class FrontDesktop extends Component {
  state = {
    visible: true
  };
  onExitViewport = () => {
    console.log("Out");
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <Background>

        <div style={{ position: "relative" }}>
          <BomboLogo src="/static/b.png" />
          <Title>
              <div style={{display: "flex", justifyContent:  "space-around"}}>
                <SuperMessage>
                  ¡Compite por ser el mejor DT con todos los equipos que quieras!
                </SuperMessage>
                <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center"
                    }}
                >
                  <ActionButton href="https://game.bombo.pe">
                    <div>JUEGA YA</div>
                  </ActionButton>
                </div>
              </div>
          </Title>

          <VideoFilter />
          <Video playsInline autoPlay loop muted>
            <source src={"static/b01.mp4"} type="video/mp4" />
          </Video>
        </div>
        <Content>
          <Message>
            <div>¿Preparado para ganar todas las fechas?</div>
          </Message>
        </Content>
      </Background>
    );
  }
}

FrontDesktop.propTypes = {
  //   children: PropTypes.element.isRequired
};

export default FrontDesktop;
