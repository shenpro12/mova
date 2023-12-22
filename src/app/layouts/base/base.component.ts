import { Component, OnInit } from '@angular/core';
import * as icon from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  icon = icon;
  constructor() {}

  ngOnInit() {}
}
