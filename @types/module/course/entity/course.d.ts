declare namespace beloop.course.entity {
    export interface Course {
      code: string;
      enrolledUsers: Array<beloop.user.entity.User>;
      
      enrollUser(user: beloop.user.entity.User): void;
    }
}
