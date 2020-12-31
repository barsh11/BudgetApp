import React, { useState } from 'react';

export type UserProps = {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  currentBalance: string;
  currentBalanceCurrency: string;
  creditCard: {
    expYear: number;
    expMonth: number;
    last4Digits: number;
  };
};

export const initialUserContext = {
  firstName: 'ian',
  lastName: 'kelley',
  email: 'ian_kelley@gmail.com',
  avatar:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
  currentBalance: '25650',
  currentBalanceCurrency: 'USD',
  creditCard: {
    expYear: 21,
    expMonth: 4,
    last4Digits: 1111,
  },
};

export const UserContext = React.createContext<UserProps>(initialUserContext);
export const UserDispatchContext = React.createContext<Function>(() => {});

const UserContextProvider: React.FC = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<UserProps>(initialUserContext);

  return (
    <UserContext.Provider value={{ ...user }}>
      <UserDispatchContext.Provider value={setUser}>{children}</UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export default UserContextProvider;
