import styled from 'styled-components';

const SWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  row-gap: 1.7rem;
  column-gap: 1.7rem;
  max-width: 95%;
  margin: 0 auto;
  height: 100%;
  overflow-y: hidden;

  &:focus,
  &:active,
  &:hover {
    overflow-y: scroll;
  }

  @media only screen and (max-width: 37.5em) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default SWrapper;
