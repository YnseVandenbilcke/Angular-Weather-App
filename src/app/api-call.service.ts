import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiCallService {
  apiKey: string = '2K829XUTSNR48JUPQ49RT4K73';

  constructor(private http: HttpClient) { }

  getWeather(location) {
    return this.http.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${this.apiKey}&contentType=json`
    )
  }
}
