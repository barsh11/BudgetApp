import React, { useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from '../../../contexts/DataContext';
import CategoriesCard from '../../../components/molecules/CategoriesCard/CategoriesCard';

const SWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.7rem;
  max-width: 95%;
  margin: 0 auto;
  height: 100%;
  overflow-y: hidden;
  padding: 1rem;

  &:focus,
  &:active,
  &:hover {
    overflow-y: scroll;
  }
`;

const CategoriesList = () => {
  const transactionsList = useContext(DataContext);

  const categoriesObj: {
    [category: string]: {}[];
  } = {};
  transactionsList.forEach((cur) => {
    if (cur.category in categoriesObj) {
      categoriesObj[cur.category].push(cur);
    } else {
      categoriesObj[cur.category] = [];
      categoriesObj[cur.category][0] = cur;
    }
  });
  console.log(categoriesObj);
  console.log(Object.keys(categoriesObj));

  const onCategoryClick = () => {};

  const renderCategoryCard = (category: string) => <CategoriesCard category={category} clicked={onCategoryClick} />;

  return <SWrapper>{Object.keys(categoriesObj).map((cur) => renderCategoryCard(cur))}</SWrapper>;
};

export default CategoriesList;
