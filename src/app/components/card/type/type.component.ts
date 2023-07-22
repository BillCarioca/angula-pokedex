import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  @Input()
  typesPokemon:string[] = ["Elétrico","Pedra"]

  constructor() { }

  ngOnInit(): void {
  }

}
