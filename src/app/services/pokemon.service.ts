import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL:string = ""

  constructor() { 
    this.baseURL = environment.pokeapi
  }
  
  getPokemon(pkemonName:string){
    console.log(pkemonName)
  }
}
