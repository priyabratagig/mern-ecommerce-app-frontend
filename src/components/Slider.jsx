import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Slide from "./Slide";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`

const Arrow = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.$direction === "left" && "1rem"};
  right: ${(props) => props.$direction === "right" && "1rem"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: transform 1.5s ease;
  transform: translateX(${(props) => props.$slideIndex * -100}vw);
`

function Slider() {
  const slides = useSelector((state) => state.slides)
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }

  return (
    <Container>
      <Arrow $direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper $slideIndex={slideIndex}>
        {slides.map((item) => (
          <Slide item={item} key={item.id} />
        ))}
      </Wrapper>
      <Arrow $direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider