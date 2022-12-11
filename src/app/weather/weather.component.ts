import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public searchForm: FormGroup;
  public weatherData: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiCallService 
  ) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      location: ['']
    })
  }

  sendToAPI(formValues) { 
    this.apiService.getWeather(formValues.location).subscribe(
      data => {
        this.weatherData = data;
      }
    )
  }
}
