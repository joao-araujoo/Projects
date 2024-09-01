import useExam from "../hooks/useExams";

export default function Subjects() {
  const { exams } = useExam();

  return (
    <>
      <h1>Subjects</h1>

      <div>
        <h1>
          {exams.reduce((acc, exam) => {
            exam.subject === "Matemática" ? acc + 1 : acc;
          }, 0)}
        </h1>
      </div>
    </>
  );
}
