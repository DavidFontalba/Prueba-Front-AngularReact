import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Astronomic Picture of the Day';
  endpoint = 'https://api.nasa.gov/planetary/apod?api_key=zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb';
  myPics: any[] = []

  constructor(private http: HttpClient) {

  }
  extractData(day: Date) {
    return this.http.get<any>(`${this.endpoint}&date=${formatDate(day, 'yyyy-MM-dd', 'en')}`);
  }
  ngOnInit(): void {
    let day = new Date();

    //pic of today
    this.extractData(day).subscribe(res => {
      this.myPics.push(res);
    });

    //pic of yesterday
    day.setDate(day.getDate()-1);
    this.extractData(day).subscribe(res => {
      this.myPics.push(res);
    });

    //pic of 2 days ago
    day.setDate(day.getDate()-1);
    this.extractData(day).subscribe(res => {
      this.myPics.push(res);
    });

    //pic of 3 days ago
    day.setDate(day.getDate()-1);
    this.extractData(day).subscribe(res => {
      this.myPics.push(res);
    });

    //pic of 4 days ago
    day.setDate(day.getDate()-1);
    this.extractData(day).subscribe(res => {
      this.myPics.push(res);
    });

    //pic of 5 days ago
    day.setDate(day.getDate()-1);
    this.extractData(day).subscribe(res => {
      this.myPics.push(res);
    });

    console.log(this.myPics);
  }
}
