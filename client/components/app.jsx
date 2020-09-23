import React from 'react';
import PageHeader from './page-header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAllGrades = this.getAllGrades.bind(this);
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addNewGrade = this.addNewGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => this.setState({ grades: grades }))
      .catch(err => console.error(err));
  }

  addNewGrade(newGrade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    }).then(res => res.json())
      .then(grade => {
        const newGrade = this.state.grades.concat(grade);
        this.setState({ grades: newGrade });
      }).catch(err => console.error(err));
  }

  deleteGrade(gradeId) {
    let index = 0;
    for (let i = 0; i < this.state.grades.length; i++) {
      if (this.state.grades[i].id === gradeId) {
        index = i;
      }
    }
    fetch(`/api/grades/${gradeId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    }).then(res => res.json())
      .then(deleteGrade => {
        const newGrades = this.state.grades.slice();
        newGrades.splice(index, 1);
        this.setState({ grades: newGrades });
      }).catch(err => console.error(err));
  }

  getAverageGrade() {
    let sum = 0;
    for (let i = 0; i < this.state.grades.length; i++) {
      const grade = parseInt(this.state.grades[i].grade);
      sum += grade;
    }
    sum = sum / this.state.grades.length;
    if (!this.state.grades.name) {
      return 0;
    } else {
      return Math.round(sum);
    }
  }

  render() {
    if (this.state.grades.length === 0) {
      return (
        <div className="container">
          <div className="row">
            <PageHeader
              text="Studet Grade Table"
              getAverageGrade={this.getAverageGrade()}
            />
            <GradeTable grades={this.state.grades} deleteGrade={this.deleteGrade} />
            <GradeForm onSubmit={this.addNewGrade} />
          </div>
          <p>No grades recorded</p>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <PageHeader
              text="Studet Grade Table"
              getAverageGrade={this.getAverageGrade()}
            />
            <GradeTable grades={this.state.grades} deleteGrade={this.deleteGrade} />
            <GradeForm onSubmit={this.addNewGrade} />
          </div>
        </div>
      );
    }
  }
}

export default App;
