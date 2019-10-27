import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./components/app/app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CouponComponent } from "./components/coupon/coupon.component";
import { RouterModule, Routes } from "@angular/router";
import { appRoutes } from "./routes";
import { BetComponent } from "./components/bet/bet.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FloorPipe } from "./pipes/floor.pipe";
import { DimensionsDirective } from "./directives/dimensions.directive";
import { CardComponent } from "./components/card/card.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FormsModule } from "@angular/forms";
import { PopUpComponent } from "./components/pop-up/pop-up.component";
import { CouponConfirmComponent } from "./components/coupon-confirm/coupon-confirm.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    DashboardComponent,
    CouponComponent,
    BetComponent,
    FloorPipe,
    DimensionsDirective,
    CardComponent,
    FooterComponent,
    PopUpComponent,
    CouponConfirmComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CouponConfirmComponent]
})
export class AppModule {}
