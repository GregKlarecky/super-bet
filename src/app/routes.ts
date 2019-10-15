import { Routes } from "@angular/router";
import { HomepageComponent } from "./components/homepage/homepage.component";

export const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  { path: "home", component: HomepageComponent }
];
