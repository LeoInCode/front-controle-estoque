import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forms-produto',
  templateUrl: './forms-produto.component.html',
  styleUrls: ['./forms-produto.component.css']
})
export class FormsProdutoComponent implements OnInit {

  @Input() title: string
  @Input() type: string
  @Input() descricao: string
  @Input() placeholder: string

  constructor() { }

  ngOnInit(): void {
  }

}
