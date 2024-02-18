import styled from "styled-components";

const Container = styled.header`
  height: 3rem;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4em;
  font-weight: 500;
`;

function Announcement() {
  return (
    <Container>Super Deal! Free Shipping on Orders Over Rs.500</Container>
  )
}

export default Announcement