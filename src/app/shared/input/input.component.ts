import { Component, Input, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() descricao: string
  @Input() placeholder: string
  @Input() type: string

  constructor() { }

  ngOnInit(): void {
  }

}
