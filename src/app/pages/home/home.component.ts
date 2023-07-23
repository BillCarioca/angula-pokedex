import { Component, OnInit } from '@angular/core';
import { pokemonsPage } from 'src/app/models/pokemonsPage';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemons:pokemonsPage
  offset:number = 0
  limit:number = 20

  constructor(private service:PokemonService) {
    this.pokemons = {
      results:[{name:"", url:"" }],
      next:""
    }
   }

  ngOnInit(): void {

    this.service.getPagePokemon(this.offset,this.limit).subscribe(
      {
        next: (res)=> {
          this.pokemons=res
          console.log(res)
          console.log(this.pokemons.results[0].name)
        }
      }
    )
  }
  morePokemons(): void{
    this.limit+=20
    this.service.getPagePokemon(this.offset,this.limit).subscribe(
      {
        next: (res)=> {
          this.pokemons=res
          console.log(res)
          console.log(this.pokemons.results[0].name)
        }
      }
    )
  }
}
