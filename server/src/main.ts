import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PORT } from './constants'

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule)
    app.enableCors()
    await app.listen(PORT, () => {
      console.log(`server started on PORT ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
