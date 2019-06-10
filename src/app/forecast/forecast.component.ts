import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-forecast",
  templateUrl: "./forecast.component.html",
  styleUrls: ["./forecast.component.css"]
})
export class ForecastComponent implements OnInit {
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
  key = "";
  allResults = [];
  myResults = [];

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

    this.data.getKey().subscribe(response => {
      this.key = response.key;
      this.data.getFutureWeather(this.cityName, this.key).subscribe(data => {
        console.log("HERE: " + data.list[0].main.temp);

        // To get list of all results: data.list
        // To get temp in Kelvin: data.list[0].main.temp
        // To get weather condition: data.list[0].weather[0].description
        // To get time: data.list[0].dt_txt

        this.allResults = data.list;
        console.log(this.allResults);

        this.rain = false;
        this.clear = false;

        this.allResults.forEach(item => {
          item.main.temp = item.main.temp * (9 / 5) - 459.67;
          item.main.temp = Math.round(item.main.temp);

          if (item.weather[0].main == "Rain") {
            item.rain = true;
          } else if (item.weather[0].main == "Clear") {
            item.clear = true;
          }
        });

        for (let i = 0; i < 8; i++) {
          this.myResults[i] = this.allResults[i];
        }
      });
    });
  }

  ngOnInit() {}
}
