import express from 'express'
import prisma from './infra/database/prisma'

const app = express()

app.use(express.json())

// eslint-disable-next-line @typescript-eslint/no-empty-function
async function main() {}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

export { app }
