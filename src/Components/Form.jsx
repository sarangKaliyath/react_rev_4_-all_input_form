import React from "react";
import { useState } from "react";
import styles from "./Form.module.css";

const initialState = {
  full_name: "",
  age: "",
  address: "",
  salary: "",
  maritalStatus: false,
  department: "",
  skillSet: [],
};

const skills = ["HTML", "JS", "React", "Express", "Node.js", "MongoDB"];

export const Form = ({ formData, setFormData }) => {
  const [data, setData] = useState(initialState);
  const [skillStatus, setSkillStatus] = useState(
    new Array(skills.length).fill(false)
  );
  const {
    full_name,
    age,
    address,
    salary,
    // department,
    maritalStatus,
    // skillSet,
  } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData([...formData, data]);
    setData(initialState);
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const temp = type === "checkbox" ? checked : value;

    setData({ ...data, [name]: temp });
  };

  const handleSkills = (i) => {
    const newStatus = skillStatus.map((item, index) =>
      index === i ? !item : item
    );
    setSkillStatus(newStatus);
    setData({ ...data, skillSet: newStatus });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.container}>
        <div className={styles.text}>
          <h3>User Data</h3>
          <input
            type="text"
            placeholder="Enter Name"
            name="full_name"
            value={full_name}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Enter Age"
            name="age"
            value={age}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter Address"
            name="address"
            value={address}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Enter Salary"
            name="salary"
            value={salary}
            onChange={handleChange}
          />
        </div>
        <div className={styles.married}>
          <label>
            Marital Status
            <input
              type="checkbox"
              name="maritalStatus"
              value={maritalStatus}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.department}>
          <h3>Department</h3>
          {["A", "B", "C", "D"].map((item, index) => {
            return (
              <div key={index}>
                <input
                  type="radio"
                  name="department"
                  value={item}
                  onChange={handleChange}
                />
                <label>{item}</label>
              </div>
            );
          })}
        </div>
        <div className={styles.skills}>
          <h3>Skills</h3>
          {skills.map((item, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  checked={skillStatus[index]}
                  onChange={() => {
                    handleSkills(index);
                  }}
                />
                <label>{item}</label>
              </div>
            );
          })}
        </div>
        <input type="submit" />

        <div>
          <div>
            <h3>Filter by Department</h3>
            <button>A</button>
            <button>B</button>
            <button>C</button>
            <button>D</button>
            <button>Show All</button>
          </div>
          <div>
            <h3>Sort by Salary</h3>
            <button>Ascending</button>
            <button>Descending</button>
          </div>
        </div>
      </form>
    </div>
  );
};
