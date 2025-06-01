export abstract class BellonaError extends Error {
  abstract code: number;

  constructor(public message: string, public extras?: object) {
    super(message);
    this.extras = extras || {};
  }
}
