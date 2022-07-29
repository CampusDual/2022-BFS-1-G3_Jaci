import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  {
    id: 'views', name: 'VIEW', icon: 'remove_red_eye', opened: true,
    items: [
      {
        id: 'product',
        name: 'Products',
        route: '/main/products',
        icon: 'inventory',
        image: 'assets/images/Product.jpg',
      },
      {
        id: 'sales',
        name: 'Sales',
        route: '/main/sales',
        icon: 'sell',
        image: 'assets/images/Sales.jpg',
      },
      {
        id: 'clients',
        name: 'Clients',
        route: '/main/clients',
        icon: 'group',
        image: 'assets/images/Clients.jpg',
      },
      {
        id: 'workers',
        name: 'Workers',
        route: '/main/workers',
        icon: 'engineering',
        image: 'assets/images/Workers.jpg',
      }
    ]
  }
  /*
  { id: 'product', name: 'Products', icon: 'inventory', route: '/main/products' },
  { id: 'sales', name: 'Sales', icon: 'sell', route: '/main/sales' },
  { id: 'clients', name: 'Clients', icon: 'group', route: '/main/clients' },
  { id: 'workers', name: 'Workers', icon: 'engineering', route: '/main/workers' },
  */
  /*{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'close', confirm: 'yes' }*/
];
