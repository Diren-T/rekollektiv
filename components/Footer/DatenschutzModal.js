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

function DatenschutzModal({ show, onClose }) {
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
          <h2>Datenschutzerklärung</h2>
          <p>
            Wir freuen uns über Ihren Besuch auf unserer Website. Der Schutz
            Ihrer Privatsphäre ist uns sehr wichtig. In dieser
            Datenschutzerklärung informieren wir Sie darüber, welche Daten wir
            von Ihnen erheben und wie wir diese Daten verwenden.
          </p>
          <h3>Personenbezogene Daten</h3>
          <p>
            Wir erheben und speichern keine personenbezogenen Daten von Ihnen.
            Wir setzen keine Cookies ein und nutzen keine Tracking-Tools.
          </p>
          <h3>Server-Logfiles</h3>
          <p>
            Unser Webserver erhebt und speichert automatisch Informationen in
            sogenannten Server-Logfiles, die Ihr Browser automatisch an uns
            übermittelt. Diese sind:
            <ul>
              <li>Browsertyp/ -version</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL (die zuvor besuchte Seite)</li>
              <li>Hostname des zugreifenden Rechners (IP-Adresse)</li>
              <li>Uhrzeit der Serveranfrage</li>
            </ul>
            Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
            Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
            vorgenommen.
          </p>
          <h3>Datensicherheit</h3>
          <p>
            Wir treffen angemessene technische und organisatorische Maßnahmen,
            um Ihre Daten gegen unbeabsichtigte oder unrechtmäßige Löschung,
            Veränderung oder gegen Verlust und gegen unbefugte Weitergabe oder
            unbefugten Zugriff zu schützen.
          </p>
          <h3>Änderungen dieser Datenschutzerklärung</h3>
          <p>
            Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit
            zu ändern. Bitte besuchen Sie diese Seite regelmäßig, um sich über
            Änderungen zu informieren.
          </p>
          <h3>Kontakt</h3>
          <p>
            Wenn Sie Fragen zu dieser Datenschutzerklärung haben, können Sie uns
            per E-Mail an [Email-Adresse einfügen] kontaktieren.
          </p>
          <p>Stand: [aktuelles Datum einfügen]</p>
          <p>
            Diese Datenschutzerklärung ist gültig ab dem Tag, an dem sie auf
            unserer Website veröffentlicht wurde.
          </p>
        </div>
        {/* Fügen Sie hier weitere Abschnitte oder Informationen für Ihre Datenschutzerklärung ein */}
      </ModalContent>
    </ModalWrapper>
  );
}

export default DatenschutzModal;
