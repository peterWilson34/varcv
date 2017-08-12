import { Component,ViewEncapsulation } from '@angular/core';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  isMenuOpened=false;
  menuToggle(){
    this.isMenuOpened = ! this.isMenuOpened;
  }
  title = 'app';
}
