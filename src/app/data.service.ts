import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCurrentWeather(cityName, key): Observable<any>;

  getCurrentWeather(cityName, key) {
    return this.http.get(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&appid=" +
        key
    );
  }

  getKey(): Observable<any>;

  getKey() {
    return this.http.get("http://localhost:8000/getKey/");
  }

  getFutureWeather(cityName, key): Observable<any>;

  getFutureWeather(cityName, key) {
    return this.http.get(
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
        cityName +
        "&appid=" +
        key
    );
  }
}
