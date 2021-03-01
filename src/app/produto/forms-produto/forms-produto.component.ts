import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forms-produto',
  templateUrl: './forms-produto.component.html',
  styleUrls: ['./forms-produto.component.css']
})
export class FormsProdutoComponent implements OnInit {

  @Input() title: string

  constructor() { }

  ngOnInit(): void {
  }

}
