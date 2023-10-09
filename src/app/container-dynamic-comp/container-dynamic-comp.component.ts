import { Component, ComponentRef, OnDestroy, ViewChild, ViewContainerRef, ElementRef, OnInit } from '@angular/core';
import { DynamicCompComponent } from '../dynamic-comp/dynamic-comp.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-container-dynamic-comp',
  templateUrl: './container-dynamic-comp.component.html',
  styleUrls: ['./container-dynamic-comp.component.css']
})
export class ContainerDynamicCompComponent implements OnDestroy, OnInit {

  @ViewChild("viewContainerRef", { read: ViewContainerRef }) vcr!: ViewContainerRef;

  compReferences: ComponentRef<DynamicCompComponent>[] = [];

  subs: Subscription[] = [];

  ngOnInit(): void {
    setTimeout(() => {
        this.addChild();
    }, 0);
  }

  ngOnDestroy(): void {
      this.subs.forEach(sub => sub.unsubscribe());
  }

  addChild() {
    let idxRef = this.compReferences.push(this.vcr.createComponent(DynamicCompComponent));
    idxRef--;
    this.compReferences[idxRef].instance.ref = this.compReferences[idxRef];
    this.setPropertyLastOneDynamicComponent();

    this.subs.push(this.compReferences[idxRef].instance.removeComponent.subscribe((value) => { this.removeChildByRef(value)}));
    this.subs.push(this.compReferences[idxRef].instance.addComponent.subscribe((value) => { this.addChild()}));
  }

  removeChildByRef(refChild: ComponentRef<DynamicCompComponent>) {
      const index = this.vcr.indexOf(refChild.hostView)
      if (index != -1)  {
          this.vcr.remove(index);
          this.compReferences.splice(index, 1);
          this.setPropertyLastOneDynamicComponent();
      }
  }

  setPropertyLastOneDynamicComponent() {
    this.compReferences.forEach((element, index) => {
       element.instance.lastOne = (this.compReferences.length - 1) == index;
    });
  }

}
