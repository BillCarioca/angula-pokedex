import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { pokemonData } from '../models/pokemonData'
import { pokemonsPage } from '../models/pokemonsPage';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL:string = ""
  private pokeData:pokemonData | any
  private pokemons:pokemonsPage|any

  constructor(private http:HttpClient) { 
    this.baseURL = environment.pokeapi
  }
  
  getPokemon(pokemonName:string):Observable<pokemonData>{
    this.pokeData = this.http.get<pokemonData>(`${this.baseURL}/${pokemonName}`)
    return this.pokeData
  }
  getPagePokemon(offset:number, limit:number):Observable<pokemonsPage>{
    this.pokemons = this.http.get<pokemonsPage>(`${this.baseURL}?offset=${offset}&limit=${limit}`)
    return this.pokemons
  }
  getByIdPokemon(id:number):Observable<pokemonData>{
    this.pokeData = this.http.get<pokemonData>(`${this.baseURL}-species/${id}`)
    return this.pokeData
  }
}
