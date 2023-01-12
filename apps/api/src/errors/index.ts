class AppError {
	public readonly name: string
	public readonly code: number
	public readonly message: string

	constructor(name: string, code: number, message: string) {
		this.name = name
		this.code = code
		this.message = message
	}
}

class UnprocessableEntityError extends AppError {
	constructor(message: string) {
		super("Unprocessable Entity Error", 422, message)
	}
}

class NotFoundError extends AppError {
	constructor(message: string) {
		super("Not Found Error", 404, message)
	}
}

class ConflictError extends AppError {
	constructor(message: string) {
		super("Conflit Error", 409, message)
	}
}

class UnauthorizedError extends AppError {
	constructor(message: string) {
		super("Unauthorized Error", 401, message)
	}
}

class InternalServerError extends AppError {
	constructor(message: string) {
		super("Internal Server Error", 500, message)
	}
}

export {
	AppError,
	UnprocessableEntityError,
	NotFoundError,
	ConflictError,
	UnauthorizedError,
	InternalServerError,
}
