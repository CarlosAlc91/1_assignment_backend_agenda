import app from './app.js'
import { authenticated, synchronized } from './config/database/database.js'
import { envs } from './config/environments/environments.js'
import { initialModel } from './config/database/assiciations.js'

async function main() {
  try {
    await authenticated()
    await synchronized()
    initialModel()
  } catch (error) {
    console.log(error)
  }
}

main()


app.listen(envs.PORT, () => {
  console.log(`server is runnig on port ${envs.PORT} 😎`)
})