// Modules 3rd party
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSnackBarModule,
         MatToolbarModule, MatDialogModule, MatSidenavModule, MatNativeDateModule,
         MatCardModule, MatTabsModule, MatIconModule, MatRadioModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { FlexLayoutModule } from '@angular/flex-layout';

// Modules


// Shared
import {
  FooterComponent,
  HeaderComponent,
  CowService,
  CartItemService
} from '@shared';

// Main
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { CowAddComponent } from './pages/cowAdd/cowAdd.component';
import { PageNotFoundComponent } from './pages/not-found/not-found.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CartComponent } from './pages/cart-page/cart-page.component';

// Components
import { AppRoutingModule } from './app.routing';
import {CarouselComponent } from './components/carousel/carousel.component';
import { CartItemComponent } from './components/cartItem/cartItem.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CartItemComponent,
    HomeComponent,
    AboutMeComponent,
    CowAddComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    CartComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSnackBarModule,
    MatToolbarModule, MatDialogModule, MatSidenavModule, MatNativeDateModule,
    MatCardModule, MatTabsModule, MatIconModule, MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebaseKeys),
    AppRoutingModule
  ],
  providers: [
    CowService,
    CartItemService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
