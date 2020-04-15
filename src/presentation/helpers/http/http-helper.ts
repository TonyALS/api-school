import { HttpResponse } from '../../protocols/http'
import { ServerError } from '../../errors/server-error'
import { UnauthorizedError } from '../../errors/unauthorized-error'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})