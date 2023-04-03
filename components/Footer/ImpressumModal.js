import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

const ModalWrapper = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 444;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalContent = styled.div`
  width: 50%;
  max-width: 600px;
  background-color: white;
  border: 1px solid black;
  padding: 20px;
  position: relative;
  margin: 10px;
  overflow-y: auto;
  max-height: 80%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: ${scaleIn} 0.3s ease-out;

  @media only screen and (max-width: 768px) {
    /* Für Geräte mit einer Breite von bis zu 768px */
    width: 90%;
    margin: 10px auto;
    max-width: none;
  }

  @media only screen and (max-width: 480px) {
    /* Für Geräte mit einer Breite von bis zu 480px */
    padding: 10px;
    margin: 5px;
    max-height: 60%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  z-index: 445;
  top: 3%;
  right: 3%;
  background-color: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #333;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  animation: ${scaleIn} 0.3s ease-out;
`;

function ImpressumModal({ show, onClose }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <ModalWrapper show={show}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <div>
          <h2>Impressum</h2>
          <p>
            Firma: [Name des Architekturbüros]
            <br />
            Adresse: [Straße, Hausnummer, PLZ, Ort]
            <br />
            Telefon: [Telefonnummer]
            <br />
            E-Mail: [E-Mail-Adresse]
            <br />
            Website: [Webadresse]
            <br />
          </p>
          <p>
            Vertretungsberechtigter: [Name des vertretungsberechtigten
            Geschäftsführers oder Inhabers]
            <br />
            Registergericht: [Name des Registergerichts]
            <br />
            Registernummer: [Registernummer]
            <br />
            Umsatzsteuer-ID: [Umsatzsteuer-Identifikationsnummer]
            <br />
          </p>
          <p>
            Berufsbezeichnung: Architektenkammer [Name der zuständigen
            Architektenkammer]
            <br />
            Zuständige Aufsichtsbehörde: [Name der zuständigen Aufsichtsbehörde]
            <br />
          </p>
          <p>
            Berufsrechtliche Regelungen:
            <br />
            Architektengesetz (ArchG)
            <br />
            Honorarordnung für Architekten und Ingenieure (HOAI)
            <br />
            Berufsordnung der Architektenkammer [Name der zuständigen
            Architektenkammer]
            <br />
            Die Regelungen können auf der Website der Architektenkammer [Name
            der zuständigen Architektenkammer] eingesehen werden.
            <br />
          </p>
          <p>
            Haftungsausschluss: Wir übernehmen keine Haftung für die Inhalte
            externer Links. Für den Inhalt der verlinkten Seiten sind
            ausschließlich deren Betreiber verantwortlich.
            <br />
          </p>
          <p>
            Urheberrecht: Die Inhalte dieser Website sind urheberrechtlich
            geschützt. Eine Vervielfältigung, Verbreitung oder sonstige
            Verwendung der Inhalte bedarf der ausdrücklichen schriftlichen
            Genehmigung des Architekturbüros.
            <br />
          </p>
          <p>
            Bildnachweise: Die auf der Website verwendeten Bilder stammen von
            [Name des Fotografen oder der Fotografen oder Bildagentur].
            <br />
          </p>
          <p>
            Stand: [aktuelles Datum einfügen]
            <br />
          </p>
        </div>
      </ModalContent>
    </ModalWrapper>
  );
}

export default ImpressumModal;
