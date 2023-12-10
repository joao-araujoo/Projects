export class Exam {
  constructor({ title, subject, qtyOfQuestions, correctQuestions, madeAt }) {
    this.id = Math.floor(Math.random() * 1000000000000000); // TODO Gerar um ID de uma maneira melhor
    this.title = title;
    this.subject = subject;
    this.qtyOfQuestions = +qtyOfQuestions;
    this.correctQuestions = +correctQuestions;
    this.madeAt = madeAt;
    this.wrongQuestions = [];
    this.score = this.calculateScore();
    this.#validate();
  }

  addWrongQuestion(...question) {
    this.wrongQuestions = [...question, ...this.wrongQuestions];
  }

  calculateScore() {
    const score = (this.correctQuestions / this.qtyOfQuestions) * 100;
    return `${score.toFixed(2)}%`;
  }

  getSubjectsToStudy() {
    const subjectsToStudy = this.wrongQuestions.map(question => question.subject)
    return subjectsToStudy
  }

  async getVideoLinksForSubjects() {
    // TODO Criar função que retorna os links com API do youtube
  }

  #validate() {
    const validTitle = typeof this.title === 'string' && this.title !== "";
    const validSubject = typeof this.subject === 'string' && this.subject !== "";
    const validQtyOfQuestions = typeof this.qtyOfQuestions === 'number' && Number.isInteger(this.qtyOfQuestions) && this.qtyOfQuestions > 0
    const validCorrectQuestions = typeof this.correctQuestions === 'number' && Number.isInteger(this.correctQuestions) && this.correctQuestions > 0
    const validDate = this.madeAt !== "";

    if (!(validTitle && validSubject && validQtyOfQuestions && validCorrectQuestions && validDate)) {
      throw new Error("Invalid Exam!");
    }
  }
}

export class Question {
  constructor(topic, query, questionNumber) {
    this.topic = topic;
    this.query = query;
    this.questionNumber = questionNumber;
    this.#validate();
  }

  #validate() {
    const validTopic = typeof this.topic === "string";
    const validQuery = typeof this.query === "string";
    const validQuestionNumber =
      typeof this.questionNumber === "number" &&
      Number.isInteger(this.questionNumber);

    if (!(validQuery || validTopic || validQuestionNumber)) {
      throw new Error("Invalid Question");
    }
  }
}