import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  /* width: 100%; */
  background-color: #17202c;
  color: white;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  padding: 20px;
`;

const BomboLogo = styled.img`
  width: auto;
  height: 32px;
`;

const Head = styled.div`
  display: flex;
  align-content: center;
  vertical-align: middle;
  align-items: center;
`;

const BomboName = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 18px;
  margin-left: 12px;
`;

const WrapperSocial = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SocialImage = styled.img`
  width: auto;
  height: 30px;
`;

const SocialLink = styled.div`
  margin: 0 20px;
`;

const UtilLinksZone = styled.div`
  display: flex;
  flex-flow: column;

  margin: 20px 8px;
`;

const UtilLink = styled.div`
  font-family: "Muli", sans-serif;
  font-weight: 300;
  margin: 4px 0;
  font-size: 12px;
`;

class Footer extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // };

  render() {
    return (
      <Wrapper>
        <Head>
          <BomboLogo src="static/b.png" />
          <BomboName>Bombo Perú</BomboName>
        </Head>
        <UtilLinksZone>
          <UtilLink>Preguntas Frecuentes</UtilLink>
          <UtilLink>Términos y condiciones</UtilLink>
          <UtilLink>Políticas de privacidad</UtilLink>
        </UtilLinksZone>
        <WrapperSocial>
          <SocialLink>
            <SocialImage src="static/f.png" />
          </SocialLink>
          <SocialLink>
            <SocialImage src="static/insta.png" />
          </SocialLink>
          <SocialLink>
            <SocialImage src="static/t.png" />
          </SocialLink>
        </WrapperSocial>
      </Wrapper>
    );
  }
}

export default Footer;
