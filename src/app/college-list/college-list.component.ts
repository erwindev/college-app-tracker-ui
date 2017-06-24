import {Component, OnInit, Input} from '@angular/core';
import {CollegeData} from "../interfaces/college-data";

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.css']
})
export class CollegeListComponent implements OnInit {

  @Input()
  collegeData: CollegeData[];

  constructor() { }

  ngOnInit() {
  }

}
