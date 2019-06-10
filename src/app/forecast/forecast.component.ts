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

  constructor(private data: DataService, private formBuilder: FormBuilder) {
    this.locationForm = this.formBuilder.group({
      location: ["", Validators.required]
    });
  }

  onKey(event: any) {
    // without type info
    this.cityName += event.target.value;
  }

  ngOnInit() {}
}
