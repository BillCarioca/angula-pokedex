import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: pokemonData 
  namePokemon:string;
  typePokemon: string = "normal"
  panelAbout: boolean = true;
  panelBaseStats: boolean = false;
  panelEvolutionChain: boolean = false;
  panelMoves: boolean = false;

  constructor(private service:PokemonService,private activeRoute: ActivatedRoute, private navegador: Router) { 
    this.namePokemon =""
    this.pokemon ={
      id :0,
      name: "",
      sprites:{front_default:""},
      types:[]
    }
    this.activeRoute.params.subscribe(
      res =>{
        this.namePokemon = res['name'],
        this.ngOnInit()
      } 
    )
    console.log(this.namePokemon)
  }

  ngOnInit(): void {
    this.service.getPokemon(this.namePokemon).subscribe(
      {
        next: (res)=> {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
          this.typePokemon = res.types[0].type.name
          console.log(this.pokemon)
          console.log(res)
        },
        error: (err)=> console.log(err)
        
      }
    )
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
