import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-current-weather",
  templateUrl: "./current-weather.component.html",
  styleUrls: ["./current-weather.component.css"]
})
export class CurrentWeatherComponent implements OnInit {
  locationForm: FormGroup;
  submitted = false;
  success = false;
  cityName = "";
  result: Object;
  condition = "";
  tempK = 0;
  tempF = 0;
  rain = false;
  clear = false;

  constructor(private data: DataService, private formBuilder: FormBuilder) {
    this.locationForm = this.formBuilder.group({
      location: ["", Validators.required]
    });
  }

  onKey(event: any) {
    // without type info
    this.cityName += event.target.value;
  }

  onSubmit() {
    this.submitted = true;

    // don't allow any further code to execute if invalid form
    if (this.locationForm.invalid) {
      return;
    }

    // could connect to backend here to handle data that was submitted
    this.success = true;

    this.cityName = this.locationForm.controls.location.value;

    // Do useful stuff with the gathered data
    console.log(this.cityName);

    this.data.getCurrentWeather(this.cityName).subscribe(data => {
      this.rain = false;
      this.clear = false;
      this.result = data;
      this.condition = data.weather[0].main;
      this.tempK = data.main.temp;
      this.tempF = this.tempK * (9 / 5) - 459.67;
      this.tempF = Math.round(this.tempF);
      console.log(this.result);

      if (this.condition == "Rain") {
        this.rain = true;
      } else if (this.condition == "Clear") {
        this.clear = true;
      }
    });
  }

  ngOnInit() {}
}
