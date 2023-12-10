import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ExamsContext = createContext({})

ExamsContextProvider.propTypes = {
  children: PropTypes.node
}

export function ExamsContextProvider({ children }) {
  const [exams, setExams] = useState(() => {
    const storedExams = localStorage.getItem('prepvest-lib')
    return storedExams ? JSON.parse(storedExams) : []
  });

  const addExam = (exam) => {
    setExams((currentState) => {
      const updatedItems = [exam, ...currentState];
      localStorage.setItem("prepvest-lib", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const getExam = (examId) => {
    return exams.find((exam) => exam.id === +examId);
  };

  const deleteExam = (examId) => { 
    setExams((currentState) => {
      const updatedItems = currentState.filter((exam) => exam.id !== +examId);
      localStorage.setItem("prepvest-lib", JSON.stringify(updatedItems));
      return updatedItems;
    })
  };

  const values = {
    exams,
    addExam,
    getExam,
    deleteExam
    // updateExam,
  };

  return (
    <ExamsContext.Provider value={values}>{children}</ExamsContext.Provider>
  );
}