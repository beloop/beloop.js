import AbstractFactory from '../../core/factory/abstract-factory';
import User from '../entity/user';

class UserFactory extends AbstractFactory<beloop.user.entity.User> implements beloop.core.factory.EntityFactory<beloop.user.entity.User> {
  create() {
    return new User()
  }
}

export default UserFactory
