import React from 'react';

function PageHeader(props) {
  return (
    <div className="d-flex col-12">
      <h1 className="col-9">{ props.text }</h1>
      <h3 className="d-flex col-3 mt-3 justify-content-around">Average Grade<span className="badge badge-secondary"> {props.getAverageGrade()}</span></h3>
    </div>
  );
}

export default PageHeader;
