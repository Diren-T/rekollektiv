import React, { useState } from "react";
import Cookies from "js-cookie";
import styled from "styled-components";
import dynamic from "next/dynamic";

const CookieWrapper = styled.div`
  border: 2px solid black;
  z-index: 9999;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const CookieMessage = styled.p`
  font-size: 14px;
  margin: 0;
`;

const CookieButton = styled.button`
  background-color: transparent;
  color: black;
  padding: 10px 15px;
  border: 2px solid black;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const CookieComponent = () => {
  const [cookieAccepted, setCookieAccepted] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("cookieAccepted")
      : false
  );

  const handleAccept = () => {
    Cookies.set("cookieAccepted", true, { expires: 7 });
    if (typeof window !== "undefined") {
      localStorage.setItem("cookieAccepted", true);
    }
    setCookieAccepted(true);
  };

  return (
    <>
      {!cookieAccepted && (
        <CookieWrapper>
          <CookieMessage>
            Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern.
            Durch die Nutzung dieser Website stimmen Sie der Verwendung von
            Cookies zu. Weitere Informationen finden Sie in unserer
            Datenschutzerklärung.
          </CookieMessage>

          <CookieButton onClick={handleAccept}>Akzeptieren</CookieButton>
        </CookieWrapper>
      )}
    </>
  );
};

const NoSSRCookieComponent = dynamic(() => Promise.resolve(CookieComponent), {
  ssr: false,
});

export default NoSSRCookieComponent;
