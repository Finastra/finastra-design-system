import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'uxg-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit, OnDestroy {
  ngOnInit() {}
  ngOnDestroy() {}
}
