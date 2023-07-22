import { Component, Input, OnInit } from '@angular/core';
import { pokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  pokemon: pokemonData 

  @Input()
  imgPokemon:string = ""
  @Input()
  namePokemon:string = ""
  @Input()
  typesPokemon:string[] = [""]

  constructor(private service:PokemonService) {
    this.pokemon ={
      id :0,
      name: "",
      sprites:{front_default:""},
      types:[]
    }
   }

  

  ngOnInit(): void {
    this.service.getPokemon("pikachu").subscribe(
      {
        next: (res)=> {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
          console.log(res)
        },
        error: (err)=> console.log(err)
        
      }
    )
  }

}
