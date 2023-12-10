import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ExamsContext = createContext({})

ExamsContextProvider.propTypes = {
  children: PropTypes.node
}

export function ExamsContextProvider({ children }) {
  // states
  const [exams, setExams] = useState(() => {
    const storedExams = localStorage.getItem('prepvest-lib')
    return storedExams ? JSON.parse(storedExams) : []
  });

  // funções de crud
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
  // adicionar ao local-storage
  // retornar state de exames e funções num objeto

  const values = {
    exams,
    addExam,
    getExam,
    // updateExam,
    // deleteExam
  };

  return (
    <ExamsContext.Provider value={values}>{children}</ExamsContext.Provider>
  );
}