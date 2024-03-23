import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import shoes from "../assets/pictures/shoes.png";
import tshirt from "../assets/pictures/tshirt.png";
import { mobile } from "../styled-responsive";

const Wrapper = styled.section`
  padding: 2rem;

  ${mobile({ padding: "1rem" })}
`

const Title = styled.h1`
  font-size: 3em;
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`

const TopButton = styled.button`
  padding: 1rem;
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) => props.$type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.$type === "filled" && "white"};

  &:first-child {
    font-size: 1.4em;

    ${mobile({ fontSize: "1.2em" })}
  }
`

const TopTexts = styled.div`
  font-size: 1.6em;

  ${mobile({ display: "none" })}
`

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0rem 1rem;
`

const Bag = styled.section`
  display: flex;
  justify-content: space-between;
  column-gap: 2rem;

  ${mobile({ flexDirection: "column", rowGap: "2rem" })}
`

const Items = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: "column", rowGap: "2rem" })}
`

const ProductDetail = styled.figure`
  flex: 2;
  display: flex;
  column-gap: 2rem;
`

const Image = styled.img`
  width: 20rem;
`

const Details = styled.figcaption`
  font-size: 1.6em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
  width: 2rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;

  ${mobile({ flexDirection: "row", rowGap: "1rem", justifyContent: "space-between" })}
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  ${mobile({ columnGap: "0.rem" })}
`

const ProductAmount = styled.div`
  font-size: 2.4em;
`

const ProductPrice = styled.div`
  font-size: 3em;
  font-weight: 200;
`

const Hr = styled.hr`
  background-color: #eee;
  height: 0.1rem;
  margin: 0rem 2rem;
`

const Summary = styled.div`
  flex: 1;
  border: var(--border);
  border-radius: 1rem;
  padding: 2rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
`

const SummaryTitle = styled.h1`
  font-size: 1.8em;
  font-weight: 200;
`

const SummaryItem = styled.div` 
  flex: 1;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.$type === "total" ? "500" : "300"};
  font-size: ${(props) => props.$type === "total" ? "2.4em" : "1.4em"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: black;
  color: white;
  font-weight: 600;
`

function Cart() {
  return (
    <>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton $type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bag>
          <Items>
            <Product>
              <ProductDetail>
                <Image src={shoes} />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor $color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>&#8377; 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={tshirt} />
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>&#8377; 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Items>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>&#8377; 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>&#8377; 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>&#8377; -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem $type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>&#8377; 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bag>
      </Wrapper>
      <Hr />
    </>
  )
}

export default Cart