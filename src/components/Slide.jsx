import styled from "styled-components"
import PropTypes from 'prop-types';

const Container = styled.figure`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.$bg};
`

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 80%;
`

const InfoContainer = styled.figcaption`
  flex: 1;
  padding: 5rem;
`

const Title = styled.h1`
  font-size: 7em;
`

const Desc = styled.p`
  margin: 5rem 0rem;
  font-size: 2em;
  font-weight: 500;
  letter-spacing: 0.3rem;
`

const Button = styled.button`
  padding: 1rem;
  font-size: 2em;
  background-color: transparent;
  cursor: pointer;
  outline: auto;
`

function Slide({ item }) {
  return (
    <Container $bg={item.bg}>
      <ImgContainer>
        <Image src={item.img} />
      </ImgContainer>
      <InfoContainer>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <Button>SHOW NOW</Button>
      </InfoContainer>
    </Container>
  )
}

Slide.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired
  })
}

export default Slide