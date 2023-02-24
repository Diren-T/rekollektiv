import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <Link href="/">
          <div>
            <Logo src="/logo.svg" alt="Logo" width={100} height={50} />
          </div>
        </Link>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.header`
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px;
`;

const Logo = styled(Image)`
  height: 40px;
`;
