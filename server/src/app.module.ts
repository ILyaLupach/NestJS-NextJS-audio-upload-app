import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { URI_DB } from './constants'
import { TrackModule } from './track/track.module'

@Module({
  imports: [MongooseModule.forRoot(URI_DB), TrackModule],
})
export class AppModule {}
