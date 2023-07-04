import { validateData } from './validate-input-data'

describe('ValidateInputDataHelper test', () => {
  it('Should return message equals title is missing if title is missing', () => {
    const data = {
      description: 'test',
      type: 'teste',
      writer: 'teste',
    }
    const message = 'Is missing title field.'
    const result = validateData(data)

    expect(message).toEqual(result)
  })

  it('Should return message equals description is missing if description is missing', () => {
    const data = {
      title: 'Test',
      type: 'teste',
      writer: 'teste',
    }
    const message = 'Is missing description field.'
    const result = validateData(data)

    expect(message).toEqual(result)
  })

  it('Should return message equals type is missing if type is missing', () => {
    const data = {
      title: 'Test',
      description: 'test',
      writer: 'teste',
    }
    const message = 'Is missing type field.'
    const result = validateData(data)

    expect(message).toEqual(result)
  })

  it('Should return message equals writer is missing if writer is missing', () => {
    const data = {
      title: 'Test',
      type: 'teste',
      description: 'test',
    }
    const message = 'Is missing writer field.'
    const result = validateData(data)

    expect(message).toEqual(result)
  })

  it('Should return message equals fields are rights.', () => {
    const data = {
      title: 'Test',
      type: 'teste',
      description: 'test',
      writer: 'teste',
    }
    const message = 'Fields are rights.'
    const result = validateData(data)

    expect(message).toEqual(result)
  })
})
