import styled from "styled-components";
import register_bg from "../assets/pictures/register_bg.jpeg";
import { mobile } from "../styled-responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url(${register_bg}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({ backgroundPosition: "right" })}
`

const Wrapper = styled.section`
  width: 40%;
  padding: 2rem;
  background-color: white;

  ${mobile({ width: "75%" })}
`

const Title = styled.h1`
  font-size: 2.4em;
  font-weight: 400;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  font-size: 1.4em;
  flex: 1;
  min-width: 40%;
  margin: 2rem 1rem 0rem 0rem;
  padding: 1rem;
  border: var(--border-thin);
`

const Agreement = styled.span`
  font-size: 1.2em;
  margin: 2rem 0rem;
`

const Button = styled.button`
  width: 40%;
  padding: 1.5rem 2rem;
  font-size: 1.6em;
  background-color: teal;
  color: white;
  cursor: pointer;
`

function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" type="name" />
          <Input placeholder="last name" type="name" />
          <Input placeholder="username" type="username" />
          <Input placeholder="email" type="email" />
          <Input placeholder="password" type="password" />
          <Input placeholder="confirm password" type="password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="button">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register