import { BellonaError } from 'src/errors/base-error';

export class AlreadyExistsError extends BellonaError {
  code: number = 409;
}