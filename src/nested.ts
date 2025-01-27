/* eslint-disable indent */
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";
import { duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const newObject = [...questions];
    const newArray = newObject.filter(
        (question: Question): boolean => question.published
    );
    return newArray;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const newObject = [...questions];
    const newArray = newObject.filter(
        (question: Question): boolean =>
            !(
                question.body === "" &&
                question.expected === "" &&
                question.options.length === 0
            )
    );
    return newArray;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const newObject = [...questions];
    const newArray = newObject.filter(
        (question: Question): boolean => question.id === id
    );
    if (newArray.length !== 0) {
        return newArray[0];
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const newObject = [...questions];
    const newArray = newObject.filter(
        (question: Question): boolean => !(question.id === id)
    );
    return newArray;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const newObject = [...questions];
    const stringArray = newObject.map(
        (question: Question): string => question.name
    );
    return stringArray;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const newObject = [...questions];
    const pointSum = newObject.reduce(
        (currTotal: number, question: Question) => currTotal + question.points,
        0
    );
    return pointSum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const newObject = [...questions];
    const newArray = newObject.filter(
        (question: Question): boolean => question.published
    );
    const pointSum = newArray.reduce(
        (currTotal: number, question: Question) => currTotal + question.points,
        0
    );
    return pointSum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const newObject = [...questions];
    const csvString = newObject.reduce(
        (newString: string, question: Question) =>
            newString +
            "\n" +
            question.id +
            "," +
            question.name +
            "," +
            question.options.length +
            "," +
            question.points +
            "," +
            question.published,
        "id,name,options,points,published"
    );
    return csvString;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const newObject = [...questions];
    let answerArray: Answer[] = [];
    answerArray = newObject.map((question: Question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false
    }));
    return answerArray;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const newObject = [...questions];
    const newArray = newObject.map((question: Question) => ({
        ...question,
        published: true
    }));
    return newArray;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const newObject = [...questions];
    const newArray = newObject.filter(
        (question: Question): boolean =>
            question.type === "multiple_choice_question"
    );
    if (newArray.length === 0 || newArray.length === newObject.length) {
        //either they all equal^^ or none of them equal it
        return true;
    }
    return false;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestion = makeBlankQuestion(id, name, type);
    const newObject = [...questions];
    newObject.push(newQuestion);
    return newObject;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const newQuestion = [...questions];
    const newArray = newQuestion.map((question: Question) =>
        question.id === targetId
            ? { ...question, name: newName }
            : { ...question }
    );
    return newArray;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const newQuestion = [...questions];
    let newArray: Question[] = [];
    if (newQuestionType === "multiple_choice_question") {
        newArray = newQuestion.map((question: Question) =>
            question.id === targetId
                ? { ...question, type: newQuestionType }
                : { ...question }
        );
    } else {
        newArray = newQuestion.map((question: Question) =>
            question.id === targetId
                ? { ...question, type: newQuestionType, options: [] }
                : { ...question }
        );
    }
    return newArray;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOptionHelper(
    options: string[],
    newOption: string,
    id: number
): string[] {
    const newStringArray = [...options];
    if (id === -1) {
        newStringArray.push(newOption);
    } else {
        newStringArray.splice(id, 1, newOption);
    }
    return newStringArray;
}
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const newQuestion = [...questions];
    const newArray = newQuestion.map((question: Question) =>
        question.id === targetId
            ? {
                  ...question,
                  options: editOptionHelper(
                      // eslint-disable-next-line indent
                      //^^it kept on trying to indent and when it indented it tried to indent again and it kept on doing this forever
                      [...question.options],
                      newOption,
                      targetOptionIndex
                  )
              }
            : { ...question }
    );
    return newArray;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const newArray = [...questions];

    //since ID's are unique, there can only be one instance of a duplicate
    const duplicateLocation = newArray.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    if (duplicateLocation !== -1) {
        const duplicate = duplicateQuestion(newId, newArray[duplicateLocation]);
        newArray.splice(duplicateLocation + 1, 0, duplicate);
    }

    return newArray;
}
