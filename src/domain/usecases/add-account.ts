import { AccountModel } from '../models/account'

export interface AddAccountModel {
  name: string
  email: string
  password: string
  isAdmin?: boolean
  role?: string
}

export interface AddAccount {
  add (account: AddAccountModel): Promise<AccountModel>
}
