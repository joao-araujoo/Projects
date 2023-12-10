import { useState } from "react";
import useExam from "../hooks/useExams";
import { Exam } from "../Models/Exam";

export default function ExamForm() {
  const defaultExam = {
    title: "",
    subject: "",
    qtyOfQuestions: 0,
    correctQuestions: 0,
    madeAt: "",
  };

  const [exam, setExam] = useState(defaultExam);

  const { exams, addExam } = useExam();

  const handleChange = (ev) => {
    setExam((currentState) => {
      return {
        ...currentState,
        [ev.target.name]: ev.target.value,
      };
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    try {
      console.log(exam);
      const newExam = new Exam(exam);
      addExam(newExam);
      console.log(exams);

      setExam(defaultExam);
      alert("Prova adicionada com sucesso!");
    } catch (error) {
      alert(error.message)
    }
  };

  return (
    <form onSubmit={(ev) => handleSubmit(ev)}>
      <label htmlFor="title">Título: </label>
      <input
        type="text"
        name="title"
        id="title"
        value={exam.title}
        onChange={handleChange}
        required
      />

      <label htmlFor="subject">Matéria: </label>
      <select
        name="subject"
        id="subject"
        value={exam.subject}
        onChange={handleChange}
        required
      >
        <option value="Matemática" selected>Matemática</option>
        <option value="Linguagens">Linguagens</option>
        <option value="Ciências Humanas">Ciências Humanas</option>
        <option value="Ciências da Natureza">Ciências da Natureza</option>
      </select>

      <label htmlFor="qtyOfQuestions">Total de questões: </label>
      <input
        type="number"
        name="qtyOfQuestions"
        id="qtyOfQuestions"
        value={exam.qtyOfQuestions}
        onChange={handleChange}
        required
      />

      <label htmlFor="correctQuestions">Questões corretas: </label>
      <input
        type="number"
        name="correctQuestions"
        id="correctQuestions"
        value={exam.correctQuestions}
        onChange={handleChange}
        required
      />

      <label htmlFor="madeAt">Feito em: </label>
      <input
        type="date"
        name="madeAt"
        id="madeAt"
        value={exam.madeAt}
        onChange={handleChange}
        required
      />

      <button type="submit">Adicionar prova</button>
    </form>
  );
}
