import styled from "styled-components";
import PropTypes from 'prop-types';
import { mobile } from "../styled-responsive";
import { Link } from "react-router-dom";

const Container = styled.figure`
  flex: 1;
  height: 70vh;
  position: relative;

  ${mobile({ height: "50vh", flex: "auto" })}
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Info = styled.figcaption`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
    color:white;
    margin-bottom: 2rem;
    font-size: 4em;
`

const Button = styled.button`
    padding: 1rem;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.6em;
`

function CategoryItem({ item }) {

    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button><Link to={`/products/${item.cat}`}>SHOP NOW</Link></Button>
            </Info>
        </Container>
    )
}

CategoryItem.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cat: PropTypes.string.isRequired,
    })
}

export default CategoryItem