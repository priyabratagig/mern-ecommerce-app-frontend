import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { mobile } from "../styled-responsive";
import { Link } from "react-router-dom";

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

  & > a {
    position : absolute;
    inset: 0;
    z-index: 2;
  }
`

const Container = styled.figure`
  flex: 1;
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

  ${mobile({ width: "100%", flex: "auto", height: "35vh" })}
`

const Circle = styled.div`
  width: max(22vh, 22vw);
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: white;
  position: absolute;

  ${mobile({ width: "max(25vh, 25vw)" })}
`

const Image = styled.img`
  height: 75%;
  width: 75%;
  z-index: 1;
  object-fit: contain;
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
  z-index: 3;
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
        <Link to={`/product/1234/blue`} />
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
    img: PropTypes.string.isRequired
  })
}

export default Product