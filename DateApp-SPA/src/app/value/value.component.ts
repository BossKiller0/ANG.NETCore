import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  BaseUrl = environment.base_url;
  Values: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.httpClient.get(this.BaseUrl + 'api/values').subscribe(response => {
      this.Values = response;
      console.log(this.Values);
    }, error => {
      console.log(error);
    });
  }
}
