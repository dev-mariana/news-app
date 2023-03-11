import { New, PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { NewService } from '../services/new.service'
import { v4 as uuid } from 'uuid'

const prisma = new PrismaClient()
const newService = new NewService(prisma)

export class NewController {
  async createNew(req: Request, res: Response): Promise<void> {
    const { title, description, type, writer } = req.body
    const data: New = {
      id: uuid(),
      title,
      description,
      type,
      created_at: new Date(),
      writer,
    }

    try {
      const createdNew = await newService.create(data)
      res.status(201).json(createdNew)
    } catch (error) {
      res.status(500).send('Failed to create a new')
      console.log(error)
    }
  }
}