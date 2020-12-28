import React from 'react';
import Layout, { LayoutProps } from '../layout/Layout';
import Cards, { CardsProps } from '../template/Cards';

type WithCardsProps = LayoutProps & {
  cardsData: CardsProps;
};

const WithCards: React.FC<WithCardsProps> = ({ sidebarData, summaryData, cardsData }) => (
  <Layout sidebarData={sidebarData} summaryData={summaryData}>
    <Cards cardsList={cardsData.cardsList} />
  </Layout>
);
export default WithCards;
