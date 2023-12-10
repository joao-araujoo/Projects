import { useContext } from "react";
import { ExamsContext } from "../contexts/ExamsContext";

export default function useExam() {
  return useContext(ExamsContext)
}