import styled from "styled-components";
import Product from "./Product";
import { useSelector } from "react-redux";

const Container = styled.section`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Products() {
    const popularProducts = useSelector((state) => state.popularProducts)

    return (
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products