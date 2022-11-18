import {Component, OnInit} from '@angular/core';
import {DataIntentService} from "./modules/shared/services/data-intent.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'IBM';
  customTheme : boolean = true;

  constructor(public dataIntentService: DataIntentService) {
  }

  changeTheme(){
    this.customTheme = !this.customTheme;
    this.dataIntentService.newEvent(this.customTheme)
    return this.customTheme;
  }

  ngOnInit(): void {
    this.changeTheme()
  }
}
