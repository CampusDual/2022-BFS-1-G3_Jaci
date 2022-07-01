import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'sell', name: 'Sell', icon: 'sell', route: '/main/sell' },
  { id: 'stock', name: 'Stock', icon: 'inventory', route: '/main/stock' },
  { id: 'clients', name: 'Clients', icon: 'group', route: '/main/clients' },
  { id: 'workers', name: 'Workers', icon: 'engineering', route: '/main/worker' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'close', confirm: 'yes' }
];
