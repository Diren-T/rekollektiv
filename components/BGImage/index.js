import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const Box = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height, devicePixelRatio } = window;
  return {
    width,
    height,
    devicePixelRatio,
  };
}

function BGImage() {
  const [width, setWidth] = useState();
  const [height, setheight] = useState();

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setheight(height);
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <Box style={{ backgroundImage: `url('/background01.jpg')` }}>
        <Image
          src="/background03.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          alt="ein messer und kräuter auf einem schneidebrett"
          priority={true}
        />
      </Box>
    );
  }

  return null;
}

export default BGImage;
