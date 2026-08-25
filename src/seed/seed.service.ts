import { Injectable } from '@nestjs/common';

import { AxiosAdapter } from '../common/adapters/axios.adapter';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class SeedService {

  constructor(
     @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executedSeed() {
  
    await this.pokemonModel.deleteMany({});
    try {
      const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')

      const pokemonToInsert: {name: string, no: number}[] = [];

      data.results.forEach(({ name, url }) => {
        const segments = url.split('/');
        const no: number = +segments[segments.length - 2];
        
        pokemonToInsert.push({ name, no });
      });

      this.pokemonModel.insertMany(pokemonToInsert);

    } catch (error) {
      console.error('SeedService executedSeed error', { error }); 
    }


    return 'Seeds runned';
  }

}
