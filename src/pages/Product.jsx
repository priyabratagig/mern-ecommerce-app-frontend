import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import womens_jeans from "../assets/pictures/women's_jean.jpg";

const Wrapper = styled.section`
  padding: 3rem;
  display: flex;
  min-height: 90vh;
`

const ImgContainer = styled.figure`
  flex: 1;
  position: relative;
`

const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const InfoContainer = styled.div`
  flex: 1;
  margin: 0rem 5rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`

const Title = styled.h1`
  font-weight: 200;
  font-size: 4em;
`

const Desc = styled.p`
  font-size: 1.6em;
  flex-grow: 1;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 4em;
`

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  font-size: 2em;
`

const Filter = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`

const FilterTitle = styled.span`
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 2rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  cursor: pointer;
`

const FilterSize = styled.select`
  padding: 0.5rem;
  border: 0.2rem solid #afacac;
  font-size: 1.6rem;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  column-gap: 0.5rem;
  font-size: 2em;
`

const Amount = styled.span`
  width: 3.5rem;
  font-size: 1.6rem;
  aspect-ratio: 1/1;
  border-radius: 1rem;
  border: 0.2rem solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  padding: 1.4rem;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`

function Product() {

  return (
    <>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={womens_jeans} />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas natus eius nobis ad, minima cumque modi. Eligendi odio possimus tempora! Repellat pariatur nostrum, facere error veniam sed assumenda quos voluptate?
            Sequi ab ipsa amet non molestiae deserunt dignissimos minima nihil debitis ex maxime vel ducimus dolorum in voluptatem, ipsam blanditiis sapiente, praesentium quaerat similique ipsum incidunt qui fuga! Tempore, necessitatibus.
            Ipsum numquam maxime suscipit dolorem neque a voluptatum. Laudantium, non est dolorum nam quia ex, laborum et maiores libero dolore voluptates quae! Expedita odit nihil vero, deleniti similique facere commodi.
            Et aliquid culpa tempora fugit accusantium libero, similique id, dolore incidunt aperiam quaerat quidem obcaecati ea reprehenderit esse neque doloremque iure animi maxime quod omnis corrupti quo! Illum, ad officia.
          </Desc>
          <Price>&#8377; 799</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor $color="black" />
              <FilterColor $color="darkblue" />
              <FilterColor $color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: "pointer", fontSize: "inherit" }} />
              <Amount>1</Amount>
              <Add style={{ cursor: "pointer", fontSize: "inherit" }} />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Product
