import {
  Directive,
  Input,
  Renderer2,
  ElementRef,
  HostListener,
} from '@angular/core';
import { Employee } from '../models/employee-model';

@Directive({
  selector: '[tableSort]',
})
export class SortTableDirective {
  private collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: 'base',
  });
  @Input() tableSort: Array<Employee> = [];

  constructor(private targetElement: ElementRef) {}

  @HostListener('click')
  sortData() {
    const elem = this.targetElement.nativeElement;

    const order = elem.getAttribute('order');

    const type = elem.getAttribute('type');

    const property = elem.getAttribute('name');

    if (order === 'desc') {
      this.tableSort.sort(this.sortOperation(property, order, type));
      elem.setAttribute('order', 'asc');
    } else {
      this.tableSort.sort(this.sortOperation(property, order, type));
      elem.setAttribute('order', 'desc');
    }
  }

  private sortOperation(property: string, order: string, type: string) {
    if (type == 'date') {
      return (a: any, b: any) => {
        if (order == 'desc') {
          return (
            new Date(a[property]).getTime() - new Date(b[property]).getTime()
          );
        } else {
          return (
            new Date(b[property]).getTime() - new Date(a[property]).getTime()
          );
        }
      };
    } else {
      return (a: any, b: any) => {
        if (order == 'desc') {
          return this.collator.compare(a[property] as any, b[property] as any);
        } else {
          return (
            this.collator.compare(a[property] as any, b[property] as any) * -1
          );
        }
      };
    }
  }
}
