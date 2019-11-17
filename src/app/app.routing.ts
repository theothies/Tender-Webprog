// Modules 3rd party
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 404 page
import { PageNotFoundComponent } from './pages/not-found/not-found.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { CowAddComponent } from './pages/cowAdd/cowAdd.component';
import { CartComponent } from './pages/cart-page/cart-page.component';
import { DetailComponent } from './pages/detail/detail.component';

// Components

// Routing
const appRoutes: Routes = [

  // Public pages
  { path: '', redirectTo: '/home', pathMatch : 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'cowAdd', component: CowAddComponent },
  { path: 'cart', component: CartComponent},
  { path: 'detail/:id', component: DetailComponent},
  // Protected pages
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
