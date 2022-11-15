import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gar: 0.5rem;

  h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 4.5rem;
  }

  h2 {
    color: ${({ theme }) => theme.secondary};
    font-width: 300;
    font-size: 3.5rem;
  }

  @media (mac-width: 1000px) {
    h1 {
      font-size: 3.5rem;
    }

    h2 {
      font-size: 2.5rem;
    }
  }

  @media (mac-width: 500px) {
    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1.2rem;
    }
  }
`;
