import {Component, HostBinding, OnInit} from '@angular/core';
import {DataIntentService} from "./modules/shared/services/data-intent.service";
import {FormControl} from "@angular/forms";
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'IBM';
  customTheme : boolean = true;

  constructor(public dataIntentService: DataIntentService,private overlay: OverlayContainer) {
  }

  changeTheme(){
    this.customTheme = !this.customTheme;
    this.dataIntentService.newEvent(this.customTheme)
  }

  ngOnInit(): void {
    this.changeTheme()
  }
}
