import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components"
import Logo from "./Logo"
import { Badge } from "@mui/material"

const Container = styled.nav`
  height: 6rem;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: white;
`

const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  column-gap: 2.5rem;
`

const Language = styled.span`
  font-size: 1.4em;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border: 0.05rem solid lightgray;
  display: flex;
  align-items: center;
  padding: 0.5rem;
`

const Input = styled.input`
  border: none;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const LogoContainer = styled.div`
  font-size: 2.5rem;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 2.5rem;
`

const MenuItem = styled.div`
  font-size: 1.4em;
  cursor: pointer;
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
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar