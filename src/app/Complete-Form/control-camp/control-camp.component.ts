import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-control-camp',
  templateUrl: './control-camp.component.html',
  styleUrls: ['./control-camp.component.scss']
})
export class ControlCampComponent implements OnInit {

  @Input() showError: boolean = true;
  @Input() msgError: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
