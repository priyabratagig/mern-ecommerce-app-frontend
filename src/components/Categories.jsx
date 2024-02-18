import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";

const Container = styled.section`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
`

const Categories = () => {
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