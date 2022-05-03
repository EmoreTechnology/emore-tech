import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  height: 700px;
  width: 100%;
  background: rgba(44, 69, 141, 0.3);

  > .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;
