import { Component, ComponentRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.css']
})
export class DynamicCompComponent implements OnInit {

  @Output() removeComponent : EventEmitter<ComponentRef<DynamicCompComponent>> = new EventEmitter();
  @Output() addComponent : EventEmitter<void> = new EventEmitter();

  ref!: ComponentRef<DynamicCompComponent>;
  lastOne: boolean = false;
  index: number = 0;

  ngOnInit(): void {
      this.index = Math.floor(Math.random() * 50) + 1;
  }

  onRemoveComponent() {
    this.removeComponent.emit(this.ref);
  }

  onAddComponent() {
    this.addComponent.emit();
  }
}
