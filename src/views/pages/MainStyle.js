import styled from 'styled-components';

const SWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.5rem;
  column-gap: 2rem;
  justify-items: center;

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: 1fr;
  }
`;

export default SWrapper;
