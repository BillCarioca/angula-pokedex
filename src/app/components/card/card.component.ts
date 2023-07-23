import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  pokemon: pokemonData 
  

  typePokemon : string = "normal"

  @Input()
  namePokemon:string = "pikachu"
  
  constructor(private service:PokemonService, private navegador:Router) {
    this.pokemon ={
      id :0,
      name: "",
      sprites:{front_default:""},
      types:[]
    }
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
        },
        error: (err)=> console.log(err)
        
      }
    )
  
  }
  openPokemon(namePokemon:string): void{
    this.navegador.navigate(['/pokemon/'+namePokemon])
  }

}
