import { Component, OnInit, Input } from '@angular/core';
import { AstronomicPic } from '../astronomicPic';

@Component({
  selector: 'app-astronomic-pic',
  templateUrl: './astronomic-pic.component.html',
  styleUrls: ['./astronomic-pic.component.sass']
})
export class AstronomicPicComponent implements OnInit {
  @Input() ap: AstronomicPic = {
    date: new Date(),
    explanation: "",
    media_type: "",
    title: "",
    url: "",
    sanitized: false
  };

  constructor() {

  }

  ngOnInit(): void {
  }

}
