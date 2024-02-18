import styled from "styled-components";
import PropTypes from 'prop-types';

const Container = styled.figure`
  flex: 1;
  margin: 0.3rem;
  height: 70vh;
  position: relative;
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
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 2rem;
`;

const Button = styled.button`
    padding: 1rem;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

function CategoryItem({ item }) {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

CategoryItem.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string,
        title: PropTypes.string,
        cat: PropTypes.string,
    })
}

export default CategoryItem