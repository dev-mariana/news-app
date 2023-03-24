import { New } from '@prisma/client'

export const dataMock = {
  id: '123',
  title: 'Test',
  description: 'test',
  type: 'teste',
  created_at: null,
  writer: 'teste',
} as unknown as New

export const resultMock = {
  id: '123',
  title: 'Test',
  description: 'test',
  type: 'teste',
  created_at: null,
  writer: 'teste',
} as unknown as New
