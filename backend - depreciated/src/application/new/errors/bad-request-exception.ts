export class BadRequestException {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export class InternalServerErrorException {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode: number = 500) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
