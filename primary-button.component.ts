import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css']
})
export class PrimaryButtonComponent implements OnInit {
  @Input() buttonType: string;
  @Input() buttonId: string;
  @Input() buttonText: string;
  @Input() buttonRole: string;
  @Input() buttonName: string;
  @Input() buttonDisabled: boolean;
  @Input() spinnerObj: boolean;
  @Input() buttonNameTitle: string;
  constructor() {
  }

  ngOnInit() {
  }
}

