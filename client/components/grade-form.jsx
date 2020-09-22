import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onSubmit(newGrade);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  handleReset() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    const name = this.state.name;
    const course = this.state.course;
    const grade = this.state.grade;
    return (
      <form className="ml-5 form" onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <div className="form-group mb-0">
          <i className="fas fa-user-alt row icon mb-1"></i>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleChange} />
        </div>
        <div className="form-group mb-0">
          <i className="fab fa-wpforms row icon"></i>
          <input
            type="text"
            className="form-control"
            placeholder="Course"
            name="course"
            value={course}
            onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <i className="fas fa-graduation-cap row icon"></i>
          <input
            type="text"
            className="form-control"
            placeholder="Grade"
            name="grade"
            value={grade}
            onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary mr-2">
          Add
        </button>
        <button type="reset" className="btn btn-primary">
          Cancel
        </button>
      </form>
    );
  }
}

export default GradeForm;
