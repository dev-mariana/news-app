import { New, PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { NewService } from '../services/new.service'
import { v4 as uuid } from 'uuid'
import { validateData } from '../../../helpers/validate-input-data'

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
      const message = validateData(data)

      if (
        message === 'Is missing title field.' ||
        message === 'Is missing description field.' ||
        message === 'Is missing type field.' ||
        message === 'Is missing writer field.'
      ) {
        res.status(400).json({ message })
      }

      const titleExists = await newService.findOne(title)

      if (titleExists) {
        throw new Error(`The new with name ${title} already exists.`)
      }

      const createdNew = await newService.create(data)
      res.status(201).json(createdNew)
    } catch (error) {
      res.status(500).send(`${error}`)
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const newData = await newService.findAll()

      if (!newData) {
        throw new Error('Does not exist any new.')
      }

      return res.status(201).json(newData)
    } catch (error) {
      res.status(500).send(`${error}`)
    }
  }
}
