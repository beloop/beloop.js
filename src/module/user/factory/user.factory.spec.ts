import UserFactory from './user.factory';

let factory: beloop.core.factory.EntityFactory<beloop.user.entity.User>;
let user: beloop.user.entity.User;

describe('User factory service', () => {

  beforeEach(() => (factory = new UserFactory()));
  beforeEach(() => (user = factory.create()));

  it('should create an instance of user', () => {
    expect(user).not.toBe(undefined);
  });
});
