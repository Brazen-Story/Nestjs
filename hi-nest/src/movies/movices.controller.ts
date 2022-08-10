import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
//import { query } from 'express';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entitiy';
import { MoviesService } from '../movies/movies.service';

@Controller('movices')
export class MovicesController {

    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getAll() :Movie[]{
        return this.moviesService.getAll();
    }

    @Get("/:id")
    getOne(@Param('id') moviceId : number) : Movie {
        return this.moviesService.getOne(moviceId);
    }
    
    @Post()
    create(@Body() movieData : CreateMovieDto){
        return this.moviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') moviceId : number){
        return this.moviesService.deleteOne(moviceId);
    }

    @Patch('/:id')
    patch(@Param('id') moviceId: number, @Body() updateData : UpdateMovieDto){
        return this.moviesService.update(moviceId, updateData);
    }
}
