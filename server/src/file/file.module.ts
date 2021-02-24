import { Module } from '@nestjs/common'
import { FileService } from './file.setvice'

@Module({
  imports: [],
  controllers: [],
  providers: [FileService],
})
export class FileModule {}
