import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'stock', name: 'Stock', icon: 'inventory', route: '/main/products' },
  { id: 'sales', name: 'Sales', icon: 'sell', route: '/main/sales' },
  { id: 'clients', name: 'Clients', icon: 'group', route: '/main/clients' },
  { id: 'workers', name: 'Workers', icon: 'engineering', route: '/main/worker' },
  /*{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'close', confirm: 'yes' }*/
];
