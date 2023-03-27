import styled from "styled-components";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const BodyWrapper = styled.div`
  height: 100%;
  max-height: calc(
    100vh - 60px
  ); // maximale Höhe auf Bildschirmhöhe minus Footer-Höhe setzen
  overflow: hidden; // Überlauf verstecken, um unnötiges Scrollen zu verhindern
`;

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0; // Startposition des Footers für Desktop-Geräte
  z-index: 3;
  background-color: white;
  padding: 20px;
  text-align: center;
  min-height: 60px;
  width: 100%;
  transition: bottom 0.3s ease;

  @media screen and (max-width: 768px) {
    min-height: 40px;
    padding: 10px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  text-align: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    // flex-direction: column; // Ändere die Anordnung der Inhalte für Geräte mit einer Breite von maximal 768px
    gap: 5px;
  }
`;

const FooterLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: thin;

  @media screen and (max-width: 768px) {
    font-size: 10px; // Reduziere die Schriftgröße für Geräte mit einer Breite von maximal 768px
  }
`;

const Copyright = styled.p`
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 7px; // Reduziere die Schriftgröße für Geräte mit einer Breite von maximal 768px
  }
`;

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Überprüfen, ob der Benutzer nach unten gescrollt hat
      if (window.pageYOffset > 10) {
        setShowFooter(true); // Wenn ja, zeige den Footer an
      } else {
        setShowFooter(false); // Ansonsten verstecke den Footer
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BodyWrapper>
      <FooterWrapper style={{ bottom: showFooter ? "0" : "-60px" }}>
        {/* Inhalt des Footers */}
        <FooterContent>
          <Copyright>
            © {new Date().getFullYear()} rekollektiv Alle Rechte vorbehalten.
          </Copyright>
          <FooterLink href="/impressum">Impressum</FooterLink>{" "}
          {/* Verwenden Sie FooterLink anstelle von ImpressumLink */}
          <FooterLink href="/datenschutz">Datenschutz</FooterLink>{" "}
          {/* Verwenden Sie FooterLink anstelle von DatenschutzLink */}
        </FooterContent>
      </FooterWrapper>
    </BodyWrapper>
  );
}
