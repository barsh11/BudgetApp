import React from 'react';
import SidebarBalance from './SidebarBalance';

export default {
  title: 'Sidebar/SidebarBalance',
};

export const common = () => <SidebarBalance currency="USD" balance={25650} />;
