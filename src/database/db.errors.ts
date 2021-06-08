export class DbError extends Error {
  public constructor(message = 'Unknown database error') {
    super(message);
  }
}
