import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as courseActions from '../../actions/courseActions'
import CourseList from './CourseList'

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      course: { title: "" }
    }
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  render() {
    const {courses} = this.props
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />
      </div>
    )
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {

  return {
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps)
// export default connectedStateAndProps(CoursesPage)

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)
