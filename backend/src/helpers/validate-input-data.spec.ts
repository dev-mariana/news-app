import { validateData } from './validate-input-data'

describe('ValidateInputData Helper test', () => {
  it('Should return message iguals title is missing if title is missing', () => {
    const data = {
      id: '3d496809-a5db-4885-a87e-d4c477890f58',
      description: 'test',
      type: 'teste',
      writer: 'teste',
    }
    const message = 'Is missing title field.'
    const result = validateData(data)

    expect(result).toEqual(message)
  })

  it('Should return message iguals description is missing if description is missing', () => {
    const data = {
      id: '3d496809-a5db-4885-a87e-d4c477890f58',
      title: 'Test',
      type: 'teste',
      writer: 'teste',
    }
    const message = 'Is missing description field.'
    const result = validateData(data)

    expect(result).toEqual(message)
  })

  it('Should return message iguals type is missing if type is missing', () => {
    const data = {
      id: '3d496809-a5db-4885-a87e-d4c477890f58',
      title: 'Test',
      description: 'test',
      writer: 'teste',
    }
    const message = 'Is missing type field.'
    const result = validateData(data)

    expect(result).toEqual(message)
  })
})
