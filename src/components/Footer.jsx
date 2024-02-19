import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import Logo from "./Logo";
import paymeent_png from "../assets/pictures/payment.png";
import { mobile } from "../styled-responsive";

const Container = styled.footer`
  display: flex;
  margin: 2rem;
  column-gap: 2rem;

  ${mobile({ flexDirection: "column", rowGap: "2rem" })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`
const LogoContainer = styled.div`
  width: min-content;
  font-size: 3em;
`

const Desc = styled.p`
  font-size: 1.8em;
`

const SocialContainer = styled.div`
  display: flex;
  column-gap: 2rem;
  font-size: 2em;
`

const SocialIcon = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;

  ${mobile({ display: "none" })}
`

const Title = styled.h3`
  font-size: 2.5em;
`

const List = styled.ul`
  font-size: 1.8em;
  display: flex;
  flex-wrap: wrap;
  row-gap: 0.5rem;
`

const ListItem = styled.li`
  width: 50%;
`

const Right = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8em;
`;

const Payment = styled.img`
  width: 50%;
`

function Footer() {
  return (
    <Container>
      <Left>
        <LogoContainer>{Logo}</LogoContainer>
        <Desc>
          Discover the essence of the Wild West in every stitch with our StyLight platform.
          Specializing in top-quality women&apos;s Western wear, we offer a curated selection of stylish tops,
          denim jackets, and authentic cowboy-inspired attire. Embrace the frontier spirit with our fashion-forward
          collection and shop securely from the comfort of home
        </Desc>
        <SocialContainer>
          <SocialIcon $color="3B5999">
            <Facebook style={{ fontSize: "inherit" }} />
          </SocialIcon>
          <SocialIcon $color="E4405F">
            <Instagram style={{ fontSize: "inherit" }} />
          </SocialIcon>
          <SocialIcon $color="55ACEE">
            <Twitter style={{ fontSize: "inherit" }} />
          </SocialIcon>
          <SocialIcon $color="3B5999">
            <LinkedIn style={{ fontSize: "inherit" }} />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ fontSize: "inherit", marginRight: "1em" }} /> kolkata , India 700091
        </ContactItem>
        <ContactItem>
          <Phone style={{ fontSize: "inherit", marginRight: "1em" }} /> +91 83481 05405
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ fontSize: "inherit", marginRight: "1em" }} /> priyabratachattaraj23@gmail.com
        </ContactItem>
        <Payment src={paymeent_png} />
      </Right>
    </Container>
  )
}

export default Footer