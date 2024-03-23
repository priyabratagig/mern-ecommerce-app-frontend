import styled from "styled-components";
import { mobile } from "../styled-responsive";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Title = styled.h1`
    margin: 2rem;
    font-size: 4em;
`

const FilterContainer = styled.section`
    margin: 2rem;
    display: flex;
    justify-content: space-between;
    column-gap: 2rem;
`

const Filter = styled.div`
    display: flex;
    column-gap: 2rem;
    align-items: center;

    ${mobile({ flexDirection: "column", rowGap: "1rem", alignItems: "flex-start" })}
`

const FilterText = styled.span`
  font-size: 2em;
  font-weight: 600;
`

const Select = styled.select`
  padding: 1rem;
  font-size: 1.8em;
  border: var(--border);

  ${mobile({ fontSize: "1.2em" })}
`

const Option = styled.option``;

function ProductList() {

    return (
        <>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" defaultValue="0">
                        <Option value="0">Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" defaultValue="0">
                        <Option value="0">Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select name="sort" defaultValue="newest">
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
        </>
    )
}

export default ProductList