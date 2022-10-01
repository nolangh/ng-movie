import { Component, Input, OnInit } from '@angular/core';
import axios from 'src/app/axious';
import requests from 'src/app/requests';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  constructor() {}

  @Input() movies: any;

  ngOnInit(): void {}
}
