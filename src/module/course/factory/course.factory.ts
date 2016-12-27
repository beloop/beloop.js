import AbstractFactory from '../../core/factory/abstract-factory';
import Course from '../entity/course';

class CourseFactory extends AbstractFactory<beloop.course.entity.Course> {
  create() {
    return new Course()
  }
}

export default CourseFactory
