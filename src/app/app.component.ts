import {Component, OnInit} from '@angular/core';
import {SpinnerService} from "./services/spinner.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showSpinner: boolean;

  constructor(private spinner: SpinnerService){
  }

  ngOnInit() {
    this.spinner.status.subscribe((val: boolean) => {
      this.showSpinner = val;
    });
  }

}
