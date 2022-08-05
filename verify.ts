import fs from 'fs'
import { exec } from 'child_process'
try {
  fs.readFileSync('pokedex.js')
  fs.readFileSync('pokedex.js')

  exec('npx tsc', (err) => {
    if (err) {
      console.log(err)
    }
  })

  try {
    exec('npm test', (err) => {
      if (err) {
        console.log(err)
      }
    })
  } catch (error) {}
} catch (error) {
  console.log(error)
}
