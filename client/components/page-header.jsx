import React from 'react';

function PageHeader(averageGrade) {
  return (
    <h1 className="col-8">{ averageGrade.text }</h1>
  );
}

export default PageHeader;
