import { Link } from "react-router-dom";
import useExam from "../../hooks/useExams";
import styles from "./styles.module.css";

export default function ExamsTable() {
  const { exams, deleteExam } = useExam();

  return (
    <table className={styles.wrapper} border="1">
      <thead>
        <tr>
          <th>Título</th>
          <th>Matéria</th>
          <th>Qtd. Questões</th>
          <th>Questões corretas</th>
          <th>Feito em</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {exams.map((exam) => (
          <tr key={exam.id}>
            <td>{exam.title}</td>
            <td>{exam.subject}</td>
            <td>{exam.qtyOfQuestions}</td>
            <td>{exam.correctQuestions}</td>
            <td>{exam.madeAt}</td>
            <td>
              <Link to={`/exams/${exam.id}`}>
                <button>Ver</button>
              </Link>
              <button onClick={() => deleteExam(exam.id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}