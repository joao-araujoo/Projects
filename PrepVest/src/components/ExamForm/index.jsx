import { useState } from "react";
import { Exam } from "../../Models/Exam";
import styles from "./styles.module.css";
import useExam from "../../hooks/useExams";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function ExamForm() {
  const defaultExam = {
    title: "",
    subject: "",
    qtyOfQuestions: 0,
    correctQuestions: 0,
    madeAt: "",
  };
  
  const [exam, setExam] = useState(defaultExam);
  
  const { addExam } = useExam();
  
  const handleChange = (ev) => {
    setExam((currentState) => {
      return {
        ...currentState,
        [ev.target.name]: ev.target.value,
      };
    });
  };

  const notifySuccessSubmit = () =>
    toast.success("Prova adicionada com sucesso!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }
  );

  const notifyErrorSubmit = () =>
    toast.error("Não foi possível adicionar a prova!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }
  );
  
  const handleSubmit = (ev) => {
    ev.preventDefault();

    try {
      const newExam = new Exam(exam);
      addExam(newExam);

      setExam(defaultExam);
      notifySuccessSubmit();
    } catch {
      notifyErrorSubmit();
    }
  };

  return (
    <form className={styles.wrapper} onSubmit={(ev) => handleSubmit(ev)}>
      <label htmlFor="title">Título: </label>
      <input
        type="text"
        name="title"
        id="title"
        value={exam.title}
        onChange={handleChange}
        required
      />

      <select
        name="subject"
        id="subject"
        value={exam.subject}
        onChange={handleChange}
        required
      >
        <option value="" disabled>Matérias</option>
        <option value="Matemática">Matemática</option>
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
