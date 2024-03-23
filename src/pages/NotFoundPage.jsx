import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 4em;
  margin-bottom: 2rem;
  font-weight: 400;
`;

const Message = styled.p`
  font-size: ${(props) => props.$footer ? "1.5em" : "3em"};
  letter-spacing: ${(props) => props.$footer ? "0.1em" : "0.2em"};
  color: #555;
`;

const LinkContainer = styled.span`

  & * {
    color: #007bff;
    cursor: pointer;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <Title>Opps!..</Title>
      <Message>404 - Not Found</Message>
      <Message $footer={true}>
        Go back to <LinkContainer><Link to="/">Homepage</Link></LinkContainer>.
      </Message>
    </NotFoundContainer>
  )
}

export default NotFoundPage
