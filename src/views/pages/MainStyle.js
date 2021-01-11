import styled from 'styled-components';

const SWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  column-gap: 2rem;
  max-width: 95%;
  margin: 0 auto;

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: 1fr;
  }

  &.dashboard {
    grid-template-rows: 1fr 1fr 2fr;
    overflow-y: hidden;

    &:hover,
    &:focus,
    &:active {
      overflow-y: scroll;
    }

    @media only screen and (max-width: 37.5em) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }
`;

export default SWrapper;
