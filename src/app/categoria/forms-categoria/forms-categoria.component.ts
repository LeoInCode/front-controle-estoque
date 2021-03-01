import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-categoria',
  templateUrl: './forms-categoria.component.html',
  styleUrls: ['./forms-categoria.component.css']
})
export class FormsCategoriaComponent implements OnInit {

  @Input() title: string

  constructor() { }

  ngOnInit(): void {
  }

}
