import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import styled, { keyframes } from "styled-components";

const CenteredCol = styled(Col)`
  display: flex;
  align-items: center;
  text-align: left;
`;

const TitleWrapper = styled.div`
  margin-top: 10%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const H2 = styled.h2`
  margin-top: 20%;
  font-size: 24px;
  font-weight: normal;
`;

const Button = styled.button`
  padding: 10px 20px;

  cursor: pointer;
  background-color: transparent;
`;

const handleEmailClick = () => {
  window.location.href = "mailto:mutlu@rekollektiv.de";
};

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

const EmailButton = styled(Button)`
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid black;
  margin-top: 5%;
`;

export default function Home() {
  return (
    <>
      <Header />

      <TitleWrapper>
        <H1>
          Wir begleiten Sie von der ersten Skizze bis zum letzten Schliff: alles
          aus einer Hand oder als Einzelleistung
        </H1>
        <H2>
          rekollektiv UG | +49 (0)15157631832 | mutlu@rekollektiv.de | Lünener
          Straße 30 | 44145 Dortmund
        </H2>

        <ButtonWrapper>
          <EmailButton onClick={handleEmailClick}>E-Mail schreiben</EmailButton>
        </ButtonWrapper>
      </TitleWrapper>
    </>
  );
}
