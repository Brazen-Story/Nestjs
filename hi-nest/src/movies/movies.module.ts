import { Module } from '@nestjs/common';
import { MovicesController } from './movices.controller';
import { MoviesService } from './movies.service';

@Module({
    controllers: [MovicesController],
    providers : [MoviesService],
})
export class MoviesModule {}
