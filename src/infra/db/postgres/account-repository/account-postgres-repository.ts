import { AddAccountRepository } from '../../../../data/protocols/db/account/add-account-repository'
import { AddAccountModel } from '../../../../data/model/add-account'
import { AccountModel } from '../../../../data/model/account'
import { User } from '../../entities/User'
import { LoadAccountByEmailRepository } from '../../../../data/protocols/db/account/load-account-by-email-repository'
import { UpdateAccessTokenRepository } from '../../../../data/protocols/db/account/update-access-token-repository'
import { LoadAccountByTokenRepository } from '../../../../data/protocols/db/account/load-account-by-token-repository'

export class AccountPostgresRepository implements AddAccountRepository,
LoadAccountByEmailRepository, UpdateAccessTokenRepository, LoadAccountByTokenRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const account = await User.create(accountData).save()
    return account
  }

  async loadByEmail (email: string): Promise<AccountModel> {
    const account = await User.findOne({ email })
    return account
  }

  async updateAccessToken (id: number, token: string): Promise<void> {
    const user = await User.findOne({ id })
    user.accessToken = token
    await user.save()
  }

  async loadByToken (token: string, role?: string): Promise<AccountModel> {
    const account = await User.findOne({
      where: [
        { accessToken: token, role: role },
        { accessToken: token, role: 'admin' },
        { accessToken: token }
      ]
    })
    if (!account || (!account.role && role)) {
      return null
    }
    return account
  }
}
