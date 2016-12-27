class User implements beloop.user.entity.User {
  get email(): string { return this.email; }
  set email(email: string) { this.email = email; }
}

export default User;
