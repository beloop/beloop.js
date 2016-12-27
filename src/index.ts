import CourseBundle from './module/course'

const course: beloop.course.entity.Course = CourseBundle.factory.Course.create()
console.log(course.enrolledUsers)
