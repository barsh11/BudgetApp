import styled from 'styled-components';

const SWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content;
  align-content: start;
  grid-gap: 1.7rem;
  align-items: center;
  max-width: 95%;
  height: 100%;
  margin: 0 auto;
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
