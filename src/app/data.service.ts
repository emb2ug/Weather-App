import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCurrentWeather(cityName) {
    return this.http.get(
      "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid="
    );
  }

  getFutureWeather(cityName) {
    return this.http.get(
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
        cityName +
        "&appid="
    );
  }
}
