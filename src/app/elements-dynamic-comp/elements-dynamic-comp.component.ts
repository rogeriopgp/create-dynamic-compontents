import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { DynamicCompBaseComponent } from '../dynamic-comp-base/dynamic-comp-base';

@Component({
  selector: 'app-elements-dynamic-comp',
  templateUrl: './elements-dynamic-comp.component.html',
  styleUrls: ['./elements-dynamic-comp.component.css']
})
export class ElementsDynamicCompComponent extends DynamicCompBaseComponent  {

  createGroupDynamicComp(): FormGroup<any> {
    const elementForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required)
    });
    return elementForm;
  }

}
