import { New, PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { NewService } from '../services/new.service';
import { v4 as uuid } from 'uuid';
import { validateData } from '../../../helpers/validate-input-data';
import {
  BadRequestException,
  InternalServerErrorException,
} from '../errors/bad-request-exception';

const prisma = new PrismaClient();
const newService = new NewService(prisma);

export class NewController {
  async createNew(req: Request, res: Response): Promise<void> {
    const { title, description, type, writer } = req.body;
    const data: New = {
      id: uuid(),
      title,
      description,
      type,
      created_at: new Date(),
      writer,
    };

    try {
      const message = validateData(data);

      if (
        message === 'Is missing title field.' ||
        message === 'Is missing description field.' ||
        message === 'Is missing type field.' ||
        message === 'Is missing writer field.'
      ) {
        res.status(400).json({ message });
      }

      const titleExists = await newService.findOne(title);

      if (titleExists) {
        throw new BadRequestException(
          `The new with name '${title}' already exists.`
        );
      }

      const createdNew = await newService.create(data);
      res.status(201).json(createdNew);
    } catch (error) {
      if (error instanceof BadRequestException) {
        res.status(error.statusCode).send({ message: error.message });
      }

      if (error instanceof InternalServerErrorException) {
        res.status(error.statusCode).send({ message: error.message });
      }
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const data = await newService.findAll();

      if (data.length === 0) {
        throw new Error('Does not exist any new.');
      }

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).send(`${error}`);
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const newData = await newService.findById(id);

      if (!newData) {
        throw new Error(`Does not exist any new with ${id}.`);
      }

      return res.status(201).json(newData);
    } catch (error) {
      return res.status(500).send(`${error}`);
    }
  }
}
