import React from 'react';
import UserDetails from './UserDetails';

export default {
  title: 'Summary/UserDetails',
};

export const common = () => (
  <UserDetails userName="Ian Kelley" userEmail="ian_kelley@gmail.com">
    common UserDetails
  </UserDetails>
);
