import { Component, EventEmitter, Output, ComponentRef, Input } from '@angular/core';
import { DynamicCompBaseComponent } from '../dynamic-comp-base/dynamic-comp-base';
import { FormGroup } from '@angular/forms';

export interface DynamicDeleteButtonValues {
   formGroup: FormGroup<any>,
   dynamicComponent: ComponentRef<DynamicCompBaseComponent>;
   deleteButtonComponent: ComponentRef<DynamicCompDeleteButtonComponent>;
}

@Component({
  selector: 'app-dynamic-comp-delete-button',
  templateUrl: './dynamic-comp-delete-button.component.html'
})
export class DynamicCompDeleteButtonComponent {

  @Output() deleteClick: EventEmitter<DynamicDeleteButtonValues> = new EventEmitter();
  @Input() messageToolTipDeleteButton: string = "Excluir item";

  formGroupDynamicComponent!: FormGroup<any>;
  dynamicComponent!: ComponentRef<DynamicCompBaseComponent>;
  deleteButtonComponent!: ComponentRef<DynamicCompDeleteButtonComponent>;

  onRemoveElement() {
      this.deleteClick.emit({
          formGroup: this.formGroupDynamicComponent,
          dynamicComponent: this.dynamicComponent,
          deleteButtonComponent: this.deleteButtonComponent
      });
  }
}
