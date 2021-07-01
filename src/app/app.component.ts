import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Astronomic Picture of the Day';
  endpoint = 'https://api.nasa.gov/planetary/apod?api_key=zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb';
  myPics: any[] = [];
  dashboard = true;
  infoToShow: any = "";


  constructor(private http: HttpClient, private _sanitizer: DomSanitizer) {
  }

  extractData(day: Date) {
    return this.http.get<any>(`${this.endpoint}&date=${formatDate(day, 'yyyy-MM-dd', 'en')}`);
  }

  insertData(day: Date) {
    this.extractData(day).subscribe(res => {
      res.sanitized = false;
      if (res.url.includes("www.youtube")) {
        res.url = this._sanitizer.bypassSecurityTrustResourceUrl(res.url);
        res.sanitized = true;
      }
      this.myPics.push(res);
    });
  }

  ngOnInit(): void {
    let day = new Date();

    for (let i = 0; i < 6; i++) {
      this.insertData(day);
      day.setDate(day.getDate() - 1);
    }
  }

  switchInfo(picObject: any) {
    this.dashboard = false;
    this.infoToShow = picObject
    if (picObject === "back") this.dashboard = true;
  }
}
