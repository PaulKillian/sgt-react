import React from 'react';
import PageHeader from './page-header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAllGrades = this.getAllGrades.bind(this);
    this.getAverageGrade = this.getAverageGrade.bind(this);
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

  getAverageGrade() {
    let sum = 0;
    let average = 0;
    for (let i = 0; i < this.state.grades.length; i++) {
      sum += this.state.grades[i].id;
      average = sum / this.state.grades.length;
    }
    average.toString();
    return Math.round(average);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <PageHeader text="Studet Grade Table" getAverageGrade={this.getAverageGrade} />
          <GradeTable grades={this.state.grades} />
        </div>
      </div>
    );
  }
}

export default App;
