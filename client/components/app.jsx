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

  getAverageGrade() {
    let sum = 0;
    let average = 0;
    for (let i = 0; i < this.state.grades.length; i++) {
      sum += this.state.grades[i].grade;
      average = sum / this.state.grades.length;
    }
    return Math.round(average);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <PageHeader
            text="Studet Grade Table"
            getAverageGrade={this.getAverageGrade()}
          />
          <GradeTable grades={this.state.grades} />
          <GradeForm onSubmit={this.addNewGrade} />
        </div>
      </div>
    );
  }
}

export default App;
