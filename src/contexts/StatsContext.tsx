import React, { useState } from 'react';

export type statsProps = Map<[number, string], { expenses: number; incomes: number; cancelled: number }>;

export const initialStatsContext: statsProps = new Map([[[2020, 'Jan'], { expenses: 0, incomes: 0, cancelled: 0 }]]);

export const StatsContext = React.createContext<statsProps>(
  new Map([[[2020, 'Jan'], { expenses: 0, incomes: 0, cancelled: 0 }]])
);
export const StatsDispatchContext = React.createContext<Function>(() => {});

const StatsContextProvider: React.FC = ({ children }) => {
  const [stats, setStats] = useState<statsProps>(initialStatsContext);

  return (
    <StatsContext.Provider value={new Map(stats)}>
      <StatsDispatchContext.Provider value={setStats}>{children}</StatsDispatchContext.Provider>
    </StatsContext.Provider>
  );
};

export default StatsContextProvider;
