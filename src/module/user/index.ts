import User from './entity/user'
import UserFactory from './factory/user.factory'

export default {
  entity: {
    User
  },
  factory: {
    User: new UserFactory()
  }
}
