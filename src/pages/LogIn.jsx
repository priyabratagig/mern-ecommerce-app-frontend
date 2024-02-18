import styled from "styled-components";
import login_bg from "../assets/pictures/login_bg.webp";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url(${login_bg}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.section`
  width: 25%;
  padding: 2rem;
  background-color: white;
`

const Title = styled.h1`
  font-size: 2.4em;
  font-weight: 400;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1rem 0;
  padding: 1rem;
  border: 0.2rem solid #afacac;
  font-size: 1.4em;
`

const Button = styled.button`
  width: 40%;
  padding: 1.5rem 2rem;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 1rem;
  font-size: 1.6em;

  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 0.5rem 0px;
  font-size: 1.3em;
  text-decoration: underline;
  color: initial;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
  font-size: 1.3em;
`;

function Login() {

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" type="username" />
                    <Input placeholder="password" type="password" />
                    <Button type="button">LOGIN</Button>
                    {false && <Error>Something went wrong...</Error>}
                    <Link href="javascript:void(0)">CANN&apos;T REMEMBER THE PASSWORD</Link>
                    <Link href="javascript:void(0)">CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login