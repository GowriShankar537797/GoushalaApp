import React, { Component } from "react";
import styles from "./components.module.css";
export const Input = ({ label, ...props }) => {
  return (
    <div className={styles.fields}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} {...props} />
    </div>
  );
};
