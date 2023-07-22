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


  constructor(private service:PokemonService) {
    this.pokemons = {
      results:[{name:"", url:"" }],
      next:""
    }
   }

  ngOnInit(): void {

    this.service.getPagePokemon(0,20).subscribe(
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
