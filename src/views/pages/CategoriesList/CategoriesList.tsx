import React, { useContext } from 'react';
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { DataContext } from '../../../contexts/DataContext';
import CategoriesCard from '../../../components/molecules/CategoriesCard/CategoriesCard';
import TransactionsList from '../TransactionsList/TransactionsList';
import slugify from '../../../utils/slugify';

const SUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.7rem;
  max-width: 95%;
  margin: 0 auto;
  height: 100%;
  overflow-y: hidden;
  padding: 1rem;
  list-style: none;

  &:focus,
  &:active,
  &:hover {
    overflow-y: scroll;
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 22em) {
    grid-template-columns: 1fr;
  }
`;

const SLi = styled.li``;

const SLink = styled(Link)`
  text-decoration: none;

  &:hover,
  &:active {
    cursor: pointer;
  }
`;

const CategoriesList = () => {
  const transactionsList = useContext(DataContext).slice(0, 40);
  const { path, url } = useRouteMatch();

  const categories: string[] = [];
  transactionsList.forEach((cur) => {
    if (!categories.includes(cur.category)) {
      categories.push(cur.category);
    }
  });

  const renderCategoryCard = (category: string) => (
    <SLi key={category}>
      <SLink to={`${url}/${slugify(category)}`}>
        <CategoriesCard category={category} />
      </SLink>
    </SLi>
  );

  return (
    <>
      <Switch>
        <Route path={`${path}/:category`} component={TransactionsList} />
        <Route path="" exact render={() => <SUl>{categories.map((cur) => renderCategoryCard(cur))}</SUl>} />
      </Switch>
    </>
  );
};

export default CategoriesList;
