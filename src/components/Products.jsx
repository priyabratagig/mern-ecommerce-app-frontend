import styled from "styled-components";
import Product from "./Product";
import { useSelector } from "react-redux";
import { mobile } from "../styled-responsive";

const Container = styled.section`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-between;

  ${mobile({ padding: "0rem", flexDirection: "column", gap: "1.5rem", marginTop: "1.5rem" })}
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