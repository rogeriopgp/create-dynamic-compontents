import { FormGroup, FormArray } from '@angular/forms';
import { Component, Input, OnDestroy, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicCompBaseComponent } from '../dynamic-comp-base/dynamic-comp-base';
import { DynamicCompDeleteButtonComponent, DynamicDeleteButtonValues } from '../dynamic-comp-delete-button/dynamic-comp-delete-button.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.css']
})
export class DynamicCompComponent implements OnDestroy {

  @Input() formGroupMain!: FormGroup;
  @Input() dynamicComponent!: Type<DynamicCompBaseComponent>;
  @Input() elementsName: string = "elements";
  @Input() messageAddNewElement: string = "Adicionar novo item";
  @Input() messageDeleteNewElement: string = "Excluir item";
  @Input() forceKeepOneElement: boolean = true;
  @Input() descriptionQuantitySingular: string = "Item";
  @Input() descriptionQuantityPlural: string = "Itens";

  @ViewChild("viewContainerRef", { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild("viewContainerRefDeleteButton", { read: ViewContainerRef }) vcrDeleteButton!: ViewContainerRef;

  subs: Subscription[] = [];

  ngOnInit(): void {
      this.formGroupMain.addControl(this.elementsName, new FormArray([]));

      if (this.forceKeepOneElement) {
          setTimeout(() => {
              this.addElement();
          }, 0);
      }
  }

  ngOnDestroy(): void {
      this.subs.forEach(sub => sub.unsubscribe());
  }

  get elements(): FormArray {
    return this.formGroupMain.get(this.elementsName) as FormArray;
  }

  deleteElement(value: DynamicDeleteButtonValues) {
    if (this.forceKeepOneElement && this.elements.length == 1) {
        return;
    }
    this.elements.removeAt(this.elements.controls.indexOf(value.formGroup));
    const indexDynamicComp = this.vcr.indexOf(value.dynamicComponent.hostView);
    if (indexDynamicComp != -1)  {
        this.vcr.remove(indexDynamicComp);
    }
    const indexButtonDelete = this.vcrDeleteButton.indexOf(value.deleteButtonComponent.hostView);
    if (indexButtonDelete != -1)  {
        this.vcrDeleteButton.remove(indexButtonDelete);
    }
  }

  addElement(): void {
    let ref = this.vcr.createComponent(this.dynamicComponent);
    const formGroupDynamicComp = ref.instance.createGroupDynamicComp();
    this.elements.push(formGroupDynamicComp);
    ref.instance.formGroupElements = formGroupDynamicComp;

    let refDeleteButton = this.vcrDeleteButton.createComponent(DynamicCompDeleteButtonComponent);
    refDeleteButton.instance.formGroupDynamicComponent = formGroupDynamicComp;
    refDeleteButton.instance.dynamicComponent = ref;
    refDeleteButton.instance.deleteButtonComponent = refDeleteButton;
    refDeleteButton.instance.messageToolTipDeleteButton = this.messageDeleteNewElement;
    this.subs.push(refDeleteButton.instance.deleteClick.subscribe((value: DynamicDeleteButtonValues) => this.deleteElement(value)));
  }

}
