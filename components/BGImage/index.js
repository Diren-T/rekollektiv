// import { useEffect, useState } from "react";
// import Image from "next/image";
// import styled from "styled-components";

// const Box = styled.div`
//   position: fixed;

//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center center;
// `;

// export function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height, devicePixelRatio } = window;
//   return {
//     width,
//     height,
//     devicePixelRatio,
//   };
// }

// function BGImage() {
//   const [width, setWidth] = useState();
//   const [height, setheight] = useState();

//   useEffect(() => {
//     function handleResize() {
//       const { width, height } = getWindowDimensions();

//       setWidth(width);

//       setheight(height);
//     }
//     handleResize();

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   if (width && height) {
//     return (
//       <Box style={{ backgroundImage: `url('/BG01.jpg')` }}>
//         <Image
//           src="/BG01.jpg"
//           layout="fill"
//           objectFit="cover"
//           alt="Rohbau"
//           priority={true}
//           quality={90}
//           style={{ backgroundPosition: "center" }}
//         />
//       </Box>
//     );
//   }

//   return null;
// }

// export default BGImage;

import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const Box = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  transform: scaleX(-1);
`;

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height, devicePixelRatio } = window;
  return {
    width,
    height,
    devicePixelRatio,
  };
}

function getQuality(width) {
  if (width < 576) {
    return 60;
  } else if (width < 768) {
    return 70;
  } else if (width < 992) {
    return 80;
  } else {
    return 90;
  }
}

function BGImage() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [quality, setQuality] = useState(90);

  useEffect(() => {
    function handleResize() {
      const { width, height, devicePixelRatio } = getWindowDimensions();

      setWidth(width);
      setHeight(height);
      setQuality(getQuality(width) * devicePixelRatio);
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <Box style={{ backgroundImage: `url('/BG01.jpg')` }}>
        <Image
          src="/BG01.jpg"
          layout="fill"
          objectFit="cover"
          alt="Rohbau"
          priority={true}
          quality={Math.min(Math.round(quality), 100)} // Cap quality at 100
          style={{ backgroundPosition: "center" }}
        />
      </Box>
    );
  }

  return null;
}

export default BGImage;
