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
})