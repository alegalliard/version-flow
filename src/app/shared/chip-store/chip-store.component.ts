import { Component, Input, OnInit } from '@angular/core';
import { ChipModel } from './chip.model';

@Component({
  selector: 'app-chip-store',
  templateUrl: './chip-store.component.html',
  styleUrls: ['./chip-store.component.scss']
})
export class ChipStoreComponent implements OnInit {
  constructor() {

  }

  // @Input() active: boolean = true;
  @Input() isGoogle: boolean = false;
  @Input() isApple: boolean = false;
  @Input() releasedAt: string = '';
  


  ngOnInit(): void {
  }

}
