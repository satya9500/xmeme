import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormComponent } from './form/form.component';
import { NbWindowService } from '@nebular/theme';
import { FetchService } from './services/fetch.service';
import { DeleteService } from './services/delete.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private windowService: NbWindowService, private fetch: FetchService, private remove: DeleteService) {
  }
  allMemes = [];
  loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.fetch.getMemes().subscribe((res: any) => {
      this.loading = false;
      this.allMemes = res.memes;
    })
  }
  addMeme() {
    this.loading = true;
    this.windowService.open(FormComponent, { title: `Add Meme to your Arsenal` }).onClose.subscribe((res: any) => {
      this.loading = false;
      this.ngOnInit();
    })
  }
  deleteMeme(id: string) {
    this.loading = true;
    this.remove.deleteMeme(id).subscribe((res: any) => {
      console.log(res);
      this.loading = false;
      this.ngOnInit();
    })
  }

  editMeme(id: string) {
    this.loading = true;
    this.fetch.getMeme(id).subscribe((res: any) => {
      this.loading = false;
      this.windowService.open(FormComponent, { title: `Edit meme`, context: res.meme }).onClose.subscribe((res: any) => {
        this.ngOnInit();
      })
    })
  }
}
