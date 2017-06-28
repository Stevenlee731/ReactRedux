import React, {Component} from 'react'

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      course: { title: null }
    }
  }
  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
      </div>
    )
  }
}

export default CoursesPage
