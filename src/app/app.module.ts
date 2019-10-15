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
import { LiveBetsComponent } from "./components/live-bets/live-bets.component";
import { BetsComponent } from "./components/bets/bets.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    DashboardComponent,
    CouponComponent,
    LiveBetsComponent,
    BetsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
