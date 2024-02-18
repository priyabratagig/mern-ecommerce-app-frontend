import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

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
`

const FilterText = styled.span`
  font-size: 2em;
  font-weight: 600;
`

const Select = styled.select`
  padding: 1rem;
  font-size: 1.8em;
  border: 0.2rem solid #afacac;
`

const Option = styled.option``;

function ProductList() {

    return (
        <>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" value="0">
                        <Option value="0" disabled>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" value="0">
                        <Option value="0" disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </>
    )
}

export default ProductList