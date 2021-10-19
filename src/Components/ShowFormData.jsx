import React from "react";
import styles from "./Form.module.css";

export const ShowFormData = ({ formData }) => {
  return (
    <div>
      {formData.map(
        ({
          full_name,
          age,
          address,
          salary,
          department,
          maritalStatus,
          skillSet,
        }) => {
          return (
            <div className={styles.table}>
              <div>
                <h5>Name:</h5> {full_name}
              </div>
              <div>
                <h5>Age:</h5> {age}
              </div>
              <div>
                <h5>Address:</h5> {address}
              </div>
              <div>
                <h5>Salary:</h5> {salary}
              </div>
              <div>
                <h5>Department: </h5>
                {department}
              </div>
              <div>
                <h5>Marital Status:</h5> {maritalStatus ? "Married" : "Single"}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
