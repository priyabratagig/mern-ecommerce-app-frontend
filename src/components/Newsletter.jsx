import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../styled-responsive";

const Container = styled.section`
  height: 60vh;
  background-color: #f3dbdb;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 2rem;

  ${mobile({ height: "50vh" })}
`

const Title = styled.h1`
  font-size: 7em;
`

const Desc = styled.p`
  font-size: 2.4em;
  font-weight: 300;

  ${mobile({ textAlign: "center" })}
`

const InputContainer = styled.div`
  width: 50%;
  height: 4rem;
  background-color: white;
  display: flex;
  justify-content: space-between;

  ${mobile({ width: "80%" })}
`

const Input = styled.input`
  font-size: 1.6em;
  flex: 8;
  padding-left: 2rem;
  border: var(--border-thin);
`

const Button = styled.button`
  flex: 1;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-size: 4em;
`

function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input type="email" placeholder="Your email" />
        <Button>
          <Send style={{ fontSize: "inherit" }} />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter