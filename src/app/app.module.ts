import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LightboxModule } from 'ngx-lightbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-list/product-item/product-item.component';
import { CustomComponent } from './components/custom/custom.component';
import { AboutComponent } from './components/about/about.component';
import { ProductPageComponent } from './components/product-list/product-page/product-page.component';

import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { UserProfileComponent } from './components/login/user-profile/user-profile.component';
import { OverviewComponent } from './components/login/user-profile/overview/overview.component';

import { WishlistComponent } from './components/login/user-profile/wishlist/wishlist.component';
import { SettingsComponent } from './components/login/user-profile/settings/settings.component';

import { TermsComponent } from './components/legal/terms/terms.component';
import { LegalComponent } from './components/legal/legal.component';
import { PrivacyComponent } from './components/legal/privacy/privacy.component';
import { ShippingComponent } from './components/checkout/shipping/shipping.component';
import { OpenOrdersComponent } from './components/login/user-profile/open-orders/open-orders.component';
import { OrderComponent } from './components/login/user-profile/open-orders/order/order.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { OpenOrdersAdminComponent } from './components/admin/open-orders-admin/open-orders-admin.component';
import { OrderAdminComponent } from './components/admin/open-orders-admin/users-open-order/order-admin/order-admin.component';
import { UsersOpenOrderComponent } from './components/admin/open-orders-admin/users-open-order/users-open-order.component';
import { UserOrderComponent } from './components/admin/open-orders-admin/users-open-order/order-admin/user-order/user-order.component';

import { DemoMaterialModule } from './material-module';
import { CustomOrdersComponent } from './components/login/user-profile/custom-orders/custom-orders.component';
import { CustomOrderComponent } from './components/login/user-profile/custom-orders/custom-order/custom-order.component';
import { CustomUserOrderComponent } from './components/admin/open-orders-admin/users-open-order/order-admin/custom-user-order/custom-user-order.component';
import { AccountingComponent } from './components/admin/accounting/accounting.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { GallUploadComponent } from './components/admin/gall-upload/gall-upload.component';
import { BugReportComponent } from './components/bug-report/bug-report.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { ShopComponent } from './components/shop/shop.component';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    ProductListComponent,
    ProductItemComponent,
    CustomComponent,
    AboutComponent,
    ProductPageComponent,
    LoginComponent,
    CheckoutComponent,
    GalleryComponent,
    UserProfileComponent,
    OverviewComponent,
    WishlistComponent,
    SettingsComponent,
    TermsComponent,
    LegalComponent,
    PrivacyComponent,
    ShippingComponent,
    OpenOrdersComponent,
    OrderComponent,
    AdminComponent,
    DashboardComponent,
    OpenOrdersAdminComponent,
    OrderAdminComponent,
    UsersOpenOrderComponent,
    UserOrderComponent,
    CustomOrdersComponent,
    CustomOrderComponent,
    CustomUserOrderComponent,
    AccountingComponent,
    NewsletterComponent,
    GallUploadComponent,
    BugReportComponent,
    CountdownComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'ovvisuals'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MDBBootstrapModule.forRoot(),
    LightboxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxMasonryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  //
}
