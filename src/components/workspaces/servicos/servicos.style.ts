import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(44, 69, 141, 0.3);
  height: 700px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
