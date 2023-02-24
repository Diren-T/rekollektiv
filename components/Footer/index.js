import styled from "styled-components";

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  z-index: 1;
  background-color: transparent;
  padding: 20px;
  text-align: center;
  min-height: 60px;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  text-align: center;
  gap: 20px;
`;

const ImpressumLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: bold;
`;

const Copyright = styled.p`
  margin: 0;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <Copyright>&copy; 2023 rekollektiv UG</Copyright>
        <ImpressumLink href="/impressum">Impressum</ImpressumLink>
        <div></div>
      </FooterContent>
    </FooterWrapper>
  );
}
