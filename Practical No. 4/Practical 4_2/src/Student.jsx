import React from "react";
import PropTypes from "prop-types";

const Student = (props) => {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string,
  course: PropTypes.string,
  age: PropTypes.number,
};

export default Student;