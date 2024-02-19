import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";
import { mobile } from "../styled-responsive";

const Container = styled.section`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  column-gap: 0.3rem;

  ${mobile({ padding: "0rem", flexDirection: "column" })}
`

function Categories() {
    const categories = useSelector((state) => state.categories)

    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Categories