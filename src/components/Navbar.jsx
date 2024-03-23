import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"
import Logo from "./Logo"
import { Badge } from "@mui/material"
import { mobile } from "../styled-responsive"
import { Link } from "react-router-dom"

const Container = styled.nav`
  height: 6rem;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: white;
  font-size: 1.5em;

  ${mobile({ height: "5rem", fontSize: "1.4em" })}
`

const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ padding: "1rem" })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  column-gap: 2.5rem;
`

const Language = styled.span`
  cursor: pointer;

  ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
  border: var(--border-thin);
  display: flex;
  align-items: center;
  padding: 0.5rem;
`

const Input = styled.input`

  ${mobile({ width: "5rem" })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const LogoContainer = styled.div`
  font-size: 2.5rem;

  ${mobile({ fontSize: "2rem" })}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 2.5rem;

  ${mobile({ flex: 2, justifyContent: "center", columnGap: "1rem" })}
`

const MenuItem = styled.div`
  cursor: pointer;

  &:last-child {
    font-size: 1.8em;

    ${mobile({ fontSize: "1.6em" })}
  }
`


function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <LogoContainer>{Logo}</LogoContainer>
        </Center>
        <Right>
          <MenuItem><Link to="./register">REGISTER</Link></MenuItem>
          <MenuItem><Link to="./login">SIGN IN</Link></MenuItem>
          <MenuItem>
            <Link to="./cart">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined style={{ cursor: "pointer", fontSize: "inherit" }} />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar