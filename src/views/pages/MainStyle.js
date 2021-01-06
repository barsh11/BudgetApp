import styled from 'styled-components';

const SWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.5rem;
  justify-items: center;

  @media only screen and (max-width: 56.25em) {
    padding-left: 2rem;
    padding-top: 2rem;
  }
`;

export default SWrapper;
