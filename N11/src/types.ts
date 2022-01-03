export type QuestionDTO = {
    title: string,
    answer: string[]
};

export type Question = QuestionDTO & {
    expand: boolean
};