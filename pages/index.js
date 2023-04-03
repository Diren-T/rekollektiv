import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled, { keyframes } from "styled-components";
import React, { useState, useEffect } from "react";
import CookieComponent from "@/components/Cookie";
import { createGlobalStyle } from "styled-components";

// const ContentWrapper = styled.div`
//   min-height: 100vh; /* Stellt sicher, dass das Inhaltsfeld mindestens so groß wie der Bildschirm ist */
//   position: relative; /* Fügt das relative Positionierungselement hinzu */
// `;

// const TitleWrapper = styled.div`
//   z-index: 1;
//   margin-top: 10%;
//   position: fixed;
//   top: 50%;
//   left: 0;
//   transform: translate(0, -50%);
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   padding-left: 50px;
//   @media screen and (max-width: 768px) {
//     /* Styling für Geräte mit einer Breite von maximal 768px */
//     margin-top: 45%;
//     padding-left: 20px;
//   }
// `;

// const TitleDivider = styled.div`
//   width: 50%; /* Vergrößern der Breite auf 60% */
//   border-top: 1px solid white;
//   margin-bottom: 1%; /* Verkleinern des Abstands zum H2-Element */
//   margin-top: 5%; /* Verkleinern des Abstands zum H1-Element */
//   opacity: 0.7;
//   @media screen and (max-width: 768px) {
//     /* Styling für Geräte mit einer Breite von maximal 768px */
//     width: 60%;
//   }
// `;

// const H1 = styled.h1`
//   color: white;
//   font-size: px;
//   font-weight: bold;
//   margin-right: 20px;
//   margin-bottom: 0;
//   text-align: left;
//   margin-top: 100px;
//   opacity: 0.8;
//   @media screen and (max-width: 768px) {
//     /* Styling für Geräte mit einer Breite von maximal 768px */
//     font-size: 15px;
//     margin-top: 50px;
//   }
// `;

// const H2 = styled.h2`
//   color: white;
//   font-size: 20px;
//   font-weight: normal;
//   text-align: left;
//   margin-bottom: 0%;
//   margin-right: 20px;
//   opacity: 0.8;
//   @media screen and (max-width: 768px) {
//     /* Styling für Geräte mit einer Breite von maximal 768px */
//     font-size: 14px;
//   }
// `;

// const Author = styled.span`
//   font-size: 18px;
//   font-weight: normal;
//   margin-left: 10px;
//   opacity: 0.8;

//   @media screen and (max-width: 768px) {
//     /* Styling für Geräte mit einer Breite von maximal 768px */
//     font-size: 14px;
//   }
// `;

// const FooterWrapper = styled.div`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   transition: 0.5s; // Fügen Sie eine Übergangseffekt hinzu
//   transform: translateY(${({ isVisible }) => (isVisible ? "0%" : "100%")});
// `;

// const Placeholder = styled.div`
//   height: 200vh; // Platzhalter mit einer Höhe von 200% des Viewports
// `;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('../public/Roboto/Roboto-Light.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: url('../public/Roboto/Roboto-Bold.ttf') format('truetype');
  }
`;

const ContentWrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;
const TitleWrapper = styled.div`
  z-index: 1;
  margin-top: 10%;
  position: fixed;
  top: 20%;
  right: auto%;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 10px;
  // @media screen and (max-width: 1200px) {
  //   /* Styling für Geräte mit einer Breite von maximal 1200px */
  //   margin-top: 20%;
  //   padding-left: 30px;

  // }
  @media screen and (max-width: 768px) {
    /* Styling für Geräte mit einer Breite von maximal 768px */
    margin-top: 62%;
    padding-left: 20px;
  }
  @media screen and (max-width: 668px) and (orientation: landscape) {
    /* Styling für das iPhone SE im Querformat */

    margin-top: 22%;
    padding-left: 20px;
  }
`;

const TitleDivider = styled.div`
  width: 50%;
  text-align: right;
  border-top: 1px solid white;
  margin-bottom: 1%;
  margin-top: 1%;
  opacity: 0.7;
  margin-left: auto;
  margin-right: 10%;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

const H1 = styled.h1`
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 2vw;
  font-weight: bold;
  margin-left: auto;
  margin-right: 10%;
  margin-bottom: 0;
  text-align: right;
  margin-top: 10vw;
  opacity: 0.8;
  @media screen and (max-width: 768px) {
    font-size: 4.5vw;
    margin-top: 20vw;
  }
  @media screen and (max-width: 668px) and (orientation: landscape) {
    /* Styling für das iPhone SE im Querformat */
    margin-top: 1%;
    padding-left: 20px;
    font-size: 2.5vw;
  }
`;

const H2 = styled.h2`
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 1.2vw;
  margin-left: auto;
  margin-right: 10%;
  margin-bottom: 0;
  text-align: right;
  margin-top: 1vw;
  opacity: 0.8;
  @media screen and (max-width: 768px) {
    font-size: 3.5vw;
    margin-top: 20vw;
  }
  @media screen and (max-width: 668px) and (orientation: landscape) {
    /* Styling für das iPhone SE im Querformat */
    margin-top: 1%;
    margin-left: 20%;
    padding-left: 20px;
    font-size: 2vw;
  }
`;
const Author = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 1.5vw;
  font-weight: normal;
  margin-left: 1%;
  opacity: 0.8;
  @media screen and (max-width: 768px) {
    font-size: 2.5vw;
  }
  @media screen and (max-width: 668px) and (orientation: landscape) {
    /* Styling für das iPhone SE im Querformat */
    margin-top: 30%;
    padding-left: 20px;
    font-size: 2vw;
  }
`;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: 0.5s;
  transform: translateY(${({ isVisible }) => (isVisible ? "0%" : "100%")});
`;

export default function Home() {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Ändern Sie die Bedingung, um den Footer beim Scrollen anzuzeigen
      if (scrollTop > 0) {
        setFooterVisible(true);
      } else {
        setFooterVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <CookieComponent />
      <ContentWrapper>
        <TitleWrapper>
          <H1>
            „Auch aus Steinen, die einem in den Weg gelegt werden, kann man
            etwas Schönes bauen. “<Author>– Johann Wolfgang von Goethe.</Author>
          </H1>
          <TitleDivider />
          <H2>
            rekollektiv UG | +49 (0)15157631832 | post@rekollektiv.com | Lünener
            Straße 30 | 44145 Dortmund
          </H2>
        </TitleWrapper>
      </ContentWrapper>
      <FooterWrapper isVisible={footerVisible}>
        <Footer />
      </FooterWrapper>
      {/* <Placeholder /> */}
      <p></p>
    </>
  );
}
