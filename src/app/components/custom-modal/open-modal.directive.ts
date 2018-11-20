import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';
import { DialogService } from './dialog-service.service';

@Directive({
  selector: '[appOpenOnClick]'
})
export class OpenModalDirective implements OnInit {

  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef, private dialogService: DialogService) { }

  ngOnInit() {
    this.dialogService.close$.subscribe(_ => {
      this.viewContainer.clear();
    });
  }

  @Input() set appOpenOnClick(el: HTMLBaseElement) {
    let els: Array<HTMLBaseElement>;
    if (!Array.isArray(el)) {
      els = [el];
    }
    els.forEach((element: HTMLBaseElement) => {
      element.addEventListener('click', () => {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.template);
      });
    });
  }
}
