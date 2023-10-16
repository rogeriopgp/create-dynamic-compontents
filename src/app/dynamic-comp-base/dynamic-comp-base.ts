import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-comp-base',
  template: '<p>Dynamic base component</p>'
})
export abstract class DynamicCompBaseComponent {

    formGroupElements!: FormGroup;

    abstract createGroupDynamicComp(): FormGroup<any>;
}
