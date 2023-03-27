import Image from "next/image";
import styled from "styled-components";

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  z-index: 2;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  margin-top: 90px;
  padding-left: 50px;

  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;

const LogoImage = styled(Image)`
  height: 50px;
  margin-right: 10px;
  filter: invert(1);
`;

export default function Header() {
  return (
    <NavWrapper>
      <LogoLink href="/">
        <LogoImage src="/logo.svg" alt="Logo" width={200} height={50} />
      </LogoLink>
    </NavWrapper>
  );
}
