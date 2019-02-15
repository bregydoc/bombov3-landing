import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import dynamic from "next/dynamic";
import CountUp from "react-countup";
import Countdown from "react-countdown-now";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Waypoint = dynamic(() => import("react-waypoint"), {
  loading: () => <p>loading</p>,
  ssr: false
});

const BomboShield = styled.img`
  width: auto;
  height: 100px;
`;

const BomboExplain = styled.div`
  padding: 30px 6% 12px 6%;
  text-align: center;
`;

const Question = styled.div`
  font-family: "Josefin Sans", sans-serif;
  color: #38e2ba;
  text-transform: uppercase;
  font-size: 26px;
  margin: 8px 0;
`;

const Content = styled.div`
  text-align: ${props =>
    props.left ? "left" : props.center ? "center" : "right"};
  font-family: "Muli", sans-serif;
  font-weight: ${props => (props.bold ? "500" : "300")};
  font-size: ${props => (props.size ? props.size + "px" : "16px")};
  color: ${props => (props.color ? props.color : "white")};
  line-height: 1.3;
  margin: 24px 0;
`;

const ContentWithIcon = styled.div`
  text-align: center;
  display: flex;
  flex-flow: column;
  align-content: center;
  vertical-align: middle;
  justify-content: center;
`;

const Separator = styled.img`
  width: 80%;
  height: auto;
  margin: 8px 0;
  text-align: center;
`;

const Icon = styled.img`
  margin-top: 22px;
  width: ${props => (props.size ? props.size : "22%")};
  height: auto;
`;

const ContentTitle = styled.div`
  text-align: ${props =>
    props.left ? "left" : props.center ? "center" : "right"};
  font-family: "Josefin Sans", sans-serif;
  font-weight: ${props => (props.bold ? "500" : "400")};
  font-size: ${props => (props.size ? props.size + "px" : "22px")};
  color: ${props => (props.color ? props.color : "white")};
  line-height: 1.3;
  margin: 12px 0 0 0;
`;

const ContentCounter = styled.div`
  text-align: ${props =>
    props.left ? "left" : props.center ? "center" : "right"};
  font-family: "Josefin Sans", sans-serif;
  font-weight: ${props => (props.bold ? "900" : "500")};
  font-size: ${props => (props.size ? props.size + "px" : "28px")};
  color: ${props => (props.color ? props.color : "white")};
  line-height: 1.3;
  margin: 8px 0;
`;

const CountDownSub = styled.div`
  text-align: ${props =>
    props.left ? "left" : props.center ? "center" : "right"};
  font-family: "Muli", sans-serif;
  font-weight: ${props => (props.bold ? "500" : "300")};
  font-size: ${props => (props.size ? props.size + "px" : "16px")};
  color: ${props => (props.color ? props.color : "white")};
  line-height: 1.3;
  margin: -8px 0 18px 0;
  word-spacing: 8px;
`;

const MobileView = props => {
  return (
    <div>
      <BomboExplain>
        <BomboShield src="static/shield.png" />
        <Question>¿Qué es Bombo?</Question>
        <Content left>
          Bombo te permite armar tu once ideal todas las fechas de diferentes
          torneos. El rendimiento en vida real de los jugadores que elijas te
          hará ganar!.
        </Content>
        <Content center color={"#3271FF"} size="18">
          ¡Los equipos con mayor puntaje al final de la fecha ganarán dinero
          real!
        </Content>

        <Content center color="#28E3BA" bold size="22">
          ¡REPARTIMOS 1000 SOLES TODAS LAS FECHAS!
        </Content>

        <ContentWithIcon>
          <div>
            <Separator src="static/separator.png" />
          </div>
          <div>
            <Icon src="static/cup.png" />
          </div>

          <ContentTitle center color="#38E2BA">
            Total en premios repartidos
          </ContentTitle>

          <ContentCounter center size="48">
            <Waypoint onEnter={props.onEnter} onLeave={props.onLeave} />
            <CountUp
              delay={2}
              start={0}
              end={13000.0}
              prefix="s/ "
              separator=","
              decimals={2}
              bold
              duration={4.5}
              onStart={() => console.log("STARTTT")}
            >
              {({ countUpRef, start }) => {
                this.startCounter = start;
                return <span ref={countUpRef} />;
              }}
              )}
            </CountUp>
          </ContentCounter>
          <ContentTitle center color="#38E2BA">
            Total de ganadores
          </ContentTitle>
          <ContentCounter center size="48">
            <CountUp
              end={720}
              delay={2}
              // prefix="s/ "
              // separator=","
              // decimals={2}
              bold
              duration={5.75}
            />
          </ContentCounter>
        </ContentWithIcon>
        <ContentWithIcon>
          <div>
            <Separator src="static/separator.png" />
          </div>

          <div>
            <Icon src="static/watch.png" size="16%" />
          </div>
          <ContentTitle center color="#38E2BA">
            ¡Arma tus equipos e inscríbelos!
          </ContentTitle>
          <ContentTitle center color="white" size="18">
            Quedan
          </ContentTitle>

          <ContentCounter center size="48">
            <Countdown
              date={Date.parse("2019-02-16T21:00:00")}
              onComplete={delta => console.log("delta")}
            />
          </ContentCounter>
          <CountDownSub center size="14" color="#28E3BA">
            {"Días Horas Minutos Segundos"}
          </CountDownSub>
          <ContentTitle center color="white" size="16">
            <div style={{ margin: "2px 20px 20px 20px" }}>
              Para que de inicio la competencia de la primera fecha del Fútbol
              Peruano en Bombo.
            </div>
          </ContentTitle>
        </ContentWithIcon>
        <ContentWithIcon>
          <div>
            <Separator src="static/separator.png" />
          </div>
          <ContentTitle center color="#38E2BA">
            Mundo Bombo
          </ContentTitle>
          <div style={{ margin: "20px 26px" }}>
            <TwitterTimelineEmbed
              sourceType="url"
              url="https://twitter.com/bomboperu"
              options={{ height: 400 }}
              theme="dark"
            />
          </div>
        </ContentWithIcon>
      </BomboExplain>
    </div>
  );
};

MobileView.propTypes = {
  onEnter: PropTypes.func,
  onLeave: PropTypes.func
};

export default MobileView;
