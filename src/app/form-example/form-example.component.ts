import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ElementsDynamicCompComponent } from '../elements-dynamic-comp/elements-dynamic-comp.component';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent {

    elementComp = ElementsDynamicCompComponent;

    formExample = this.fb.group({
      name: ["", Validators.required],
      age: ["", Validators.required]
    });

    constructor(private fb: FormBuilder) {
    }

    onSubmit() {
      this.formExample.markAllAsTouched();
      console.log(this.formExample.valid);
      console.log(this.formExample.value);
    }



  }
