import { find } from 'lodash';

class Course implements beloop.course.entity.Course {
  public name: string;
  public description: string;
  public startDate: Date;
  public endDate: Date;
  public demo: boolean;

  public enrolledUsers: Array<beloop.user.entity.User>;
  public lessons: Array<string>;

  public code: string;

  constructor()
  {
      this.enrolledUsers = [];
      this.lessons = [];
  }

  enrollUser(user: beloop.user.entity.User) {
    const finUserByEmail = (enrolledUser: beloop.user.entity.User) => enrolledUser.email === user.email;
    const enrolledUser = find(this.enrolledUsers, finUserByEmail);
    if (enrolledUser === undefined) {
      this.enrolledUsers.push(user);
    }
  }
}

export default Course;
