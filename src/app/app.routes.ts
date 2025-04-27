import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () =>
      import('./components/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        title: 'Products',
        loadComponent: () =>
          import('./components/products/products.component').then(
            (c) => c.ProductsComponent
          ),
      },
      {
        path: ':id',
        title: 'Product Details',
        loadComponent: () =>
          import(
            './components/product-details/product-details.component'
          ).then((c) => c.ProductDetailsComponent),
      },
    ],
  },  {
    path: 'about',
    title: 'About Page',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (c) => c.AboutComponent
      )
    },
   {
    path: 'cart',
    title: 'Cart Page',
    loadComponent: () =>
      import('./components/cart/cart.component').then(
        (c) => c.CartComponent  
      )
    }
  ,{
    path: '**',
    title: 'Page Not Found',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  }
]
