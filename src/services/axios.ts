export type CardsSummaryProps = {
  id: string;
  transactionType: string;
  paypal: boolean;
  time: string;
  date: string;
  currency: string;
  category: string;
  amount: string;
  location: {
    country: string;
    city: string;
    street: string;
    lat: number;
    lng: number;
  };
  company: string;
};
