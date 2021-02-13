import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { NbWindowService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private windowService: NbWindowService) { }
  openWindow() {
    this.windowService.open(FormComponent, { title: `Add Meme to your Arsenal` });
  }
}
