import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { DialogService } from './dialog-service.service';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {
  @Input() template: TemplateRef<any>;
  constructor(private dialogService: DialogService) { }
  ngOnInit() {
  }

  closeDialog() {
    this.dialogService.close();
  }

  stopPropagate(event: Event) {
    event.stopPropagation();
  }
}
