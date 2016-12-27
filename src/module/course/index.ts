import Course from './entity/course'
import CourseFactory from './factory/course.factory'

export default {
  entity: {
    Course
  },
  factory: {
    Course: new CourseFactory()
  }
}
