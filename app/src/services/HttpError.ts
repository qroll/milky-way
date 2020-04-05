class HttpError<T> extends Error {
  code: number;
  metadata?: T;

  constructor(code: number, message?: string, metadata?: T) {
    super(message);
    this.code = code;
    this.metadata = metadata;
  }
}

class BadRequestError<T> extends HttpError<T> {}
class UnauthorizedError<T> extends HttpError<T> {}
class ForbiddenError<T> extends HttpError<T> {}
class NotFoundError<T> extends HttpError<T> {}
class InternalServerError<T> extends HttpError<T> {}

const mapCodeToError: Record<number, typeof HttpError> = {
  400: BadRequestError,
  401: UnauthorizedError,
  403: ForbiddenError,
  404: NotFoundError,
  500: InternalServerError
};

export const ErrorFactory = <T>(
  code: number,
  message?: string,
  metadata?: T
) => {
  const ErrorClass = mapCodeToError[code];
  return new ErrorClass<T>(code, message, metadata);
};
