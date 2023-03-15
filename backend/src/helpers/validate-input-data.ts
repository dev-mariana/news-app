export const validateData = (data: any) => {
  let message: string

  if (!data.title) {
    return (message = 'Is missing title field.')
  }
  if (!data.type) {
    return (message = 'Is missing type field.')
  }
  if (!data.description) {
    return (message = 'Is missing description field.')
  }
  if (!data.writer) {
    return (message = 'Is missing writer field.')
  }
  if (data.title && data.description && data.type && data.writer) {
    return (message = 'Fields are rights.')
  }
}
