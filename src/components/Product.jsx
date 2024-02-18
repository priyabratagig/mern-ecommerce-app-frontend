import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Info = styled.figcaption`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease;
  cursor: pointer;
`

const Container = styled.figure`
  flex: 1;
  margin: 0.5rem;
  min-width: 22vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e9edef;
  position: relative;
  overflow: hidden;

  &:hover ${Info}{
    opacity: 1;
  }
`

const Circle = styled.div`
  width: min(40vh, 40vw);
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`

const Image = styled.img`
  height: 75%;
  z-index: 1;
`

const Icon = styled.div`
  width: 4em;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  transition: transform 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`

function Product({ item }) {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

Product.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string
  })
}

export default Product