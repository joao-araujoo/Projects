import useExam from "../hooks/useExams";

export default function Dashboard() { 
  const { exams } = useExam();

  return (
    <>
      <h1>Dashboard</h1>

      <strong>Provas realizadas: </strong> {exams.length} <br />
      <strong>Questões feitas: </strong> {exams.reduce((accum, exam) => accum + exam.qtyOfQuestions, 0)} <br />
      <strong style={{ color: "lightgreen" }}>Questões corretas: </strong> {exams.reduce((accum, exam) => accum + exam.correctQuestions, 0)} <br />
      {/* <strong>Questões erradas: </strong> {exams.reduce((accum, exam) => accum + exam.wrongQuestions.length, 0)} <br /> */}
      <strong style={{ color: "red" }}>Questões erradas: </strong> {exams.reduce((accum, exam) => accum + exam.qtyOfQuestions, 0) - exams.reduce((accum, exam) => accum + exam.correctQuestions, 0)} <br />
    </>
  );
}
