import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  @Input()
  typesPokemom:string[] = ["Elétrico","Pedra"]

  constructor() { }

  ngOnInit(): void {
  }

}
