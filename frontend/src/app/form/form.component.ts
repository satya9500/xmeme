import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { UpdateService } from '../services/update.service';
import { NbWindowRef } from '@nebular/theme'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  @Input() text: any;
  mode = "add";
  id: string;
  constructor(private formBuilder: FormBuilder, private post: PostService, private update: UpdateService, protected ref: NbWindowRef) {
    if (ref.config.context["_id"]) {
      this.mode = "edit";
      this.id = ref.config.context["_id"];
      this.memeForm.patchValue({ name: ref.config.context["name"] })
      this.memeForm.patchValue({ url: ref.config.context["url"] })
      this.memeForm.patchValue({ caption: ref.config.context["caption"] })
    }
  }

  memeForm = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    url: [null, [Validators.required, Validators.minLength(10)]],
    caption: [null],
  });
  loading = false;

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.memeForm.invalid) {
      return;
    }
    this.loading = true;
    if (this.mode == "add") {
      this.post.postMeme(this.memeForm.value).subscribe((res: any) => {
        console.log(res)
        this.ref.close();
      })
    } else if (this.mode == "edit") {
      this.update.updateMeme(this.id, this.memeForm.value).subscribe((res: any) => {
        console.log(res);
        this.ref.close();
      })
    }
    this.loading = false;
    this.memeForm.reset();
  }

}
