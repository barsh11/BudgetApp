import React from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

type CategoriesCardProp = TypographyProps & {
  category: string;
};

const SWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 25rem;
  max-height: 16rem;
  min-height: 13rem;
  background-color: var(--color-white);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  }

  @media only screen and (max-width: 37.5em) {
    min-height: 9rem;
  }
`;

const CategoriesCard: React.FC<CategoriesCardProp> = ({ category }) => (
  <SWrapper>
    <Typography variant="h6" color="textSecondary">
      {category.toUpperCase()}
    </Typography>
  </SWrapper>
);

export default CategoriesCard;
