import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CurrentWeatherComponent } from "./current-weather/current-weather.component";
import { ForecastComponent } from "./forecast/forecast.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "current", component: CurrentWeatherComponent },
  { path: "forecast", component: ForecastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
