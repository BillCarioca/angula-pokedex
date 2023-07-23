import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  namePokemon:string;
  panelAbout: boolean = true;
  panelBaseStats: boolean = false;
  panelEvolutionChain: boolean = false;
  panelMoves: boolean = false;

  constructor(private activeRoute: ActivatedRoute, private navegador: Router) { 
    this.namePokemon =""
    
    this.activeRoute.params.subscribe(
      res =>{
        this.namePokemon = res['name'],
        console.log(res)
      } 
    )
    console.log(this.namePokemon)
  }

  ngOnInit(): void {
  }
  voltar(): void{
    this.navegador.navigate(['/'])
  }
  onAbout():void{
    this.panelAbout = true
    this.panelBaseStats = false
    this.panelEvolutionChain = false
    this.panelMoves = false
  } 
  onBaseStats():void{
    this.panelAbout = false
    this.panelBaseStats = true
    this.panelEvolutionChain = false
    this.panelMoves = false
  } 
  onEvolutionChain():void{
    this.panelAbout = false
    this.panelBaseStats = false
    this.panelEvolutionChain = true
    this.panelMoves = false
  } 
  onMoves():void{
    this.panelAbout = false
    this.panelBaseStats = false
    this.panelEvolutionChain = false
    this.panelMoves = true
  } 
}
