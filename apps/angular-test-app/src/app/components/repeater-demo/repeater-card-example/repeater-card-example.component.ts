import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'ffdc-repeater-card-example',
  templateUrl: './repeater-card-example.component.html',
  styleUrls: ['./repeater-card-example.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepeaterCardExampleComponent implements OnInit {
  @Input() data: any = {};
  @Input() columnsMatcher: any = {};
  @Input() selected = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}
}
