import {reactive} from 'vue'

export const postQuestionnaires = reactive({
    'book': {
        title: "For Book Recommendation",
        description: "",
        type: "post-study",
        task: "book",
        data: [
            {
                id: 1,
                title: 'ChatGPT provides me with surprising recommendations that helped me discover a new book that I would’t have found elsewhere.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 2,
                title: 'I find it easy to inform ChatGPT if I dislike/like the recommended book.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 3,
                title: 'ChatGPT adapts continuously to my book preferences.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 4,
                title: 'Most of ChatGPT’s responses make sense.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 5,
                title: 'ChatGPT helps me find the ideal book.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 6,
                title: 'ChatGPT is warm and caring in the book recommendation task.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 7,
                title: 'I am convinced of the book ChatGPT recommended to me.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 8,
                title: 'I will use ChatGPT again for book recommendations.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 9,
                title: 'The book recommended to me matched my interests.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 10,
                title: 'ChatGPT explains why the book was recommended to me.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 11,
                title: 'ChatGPT paid attention to what I was saying.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 12,
                title: 'ChatGPT understands what I say in the book recommendation task.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 13,
                title: 'I understand why the book was recommended to me.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 14,
                title: 'I could easily use ChatGPT to find the book of my interest.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 15,
                title: 'I feel in control of modifying my taste using ChatGPT in the book recommendation task',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 16,
                title: 'ChatGPT behaves like a human in the book recommendation task.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 17,
                title: 'I am confident I will like the book recommended to me.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 18,
                title: 'I was satisfied with the book recommendations made by GhatGPT.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            }
        ]
    },
    'job': {
        title: "For Job Recommendation",
        description: "",
        type: "post-study",
        task: "job",
        data: [
            {
                id: 1,
                title: 'ChatGPT provides me with surprising recommendations that helped me discover a new job that I wouldn’t have found elsewhere.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 2,
                title: 'I find it easy to inform ChatGPT if I dislike/like the recommended job.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 3,
                title: 'ChatGPT adapts continuously to my job preferences.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 4,
                title: 'Most of ChatGPT’s responses make sense.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 5,
                title: 'ChatGPT helps me find the ideal job.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 6,
                title: 'ChatGPT is warm and caring in the job recommendation task.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 7,
                title: 'I am convinced of the job ChatGPT recommended to me.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 8,
                title: 'I will use ChatGPT again for job recommendations.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 9,
                title: 'The job recommended to me matched my interests.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 10,
                title: 'ChatGPT explains why the job was recommended to me.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 11,
                title: 'ChatGPT paid attention to what I was saying.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 12,
                title: 'ChatGPT understands what I say in the job recommendation task.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 13,
                title: 'I understand why the job was recommended to me.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 14,
                title: 'I could easily use ChatGPT to find the job of my interest.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 15,
                title: 'I feel in control of modifying my taste using ChatGPT in the job recommendation task',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 16,
                title: 'ChatGPT behaves like a human in the job recommendation task.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 17,
                title: 'I am confident I will like the job recommended to me.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            },
            {
                id: 18,
                title: 'I was satisfied with the job recommendations made by GhatGPT.',
                type: 'selection',
                layout: 'horizontal',
                options: [
                    {
                        id: 1,
                        text: '1 (Strongly Disagree)',
                    },
                    {
                        id: 2,
                        text: '2',
                    },
                    {
                        id: 3,
                        text: '3',
                    },
                    {
                        id: 4,
                        text: '4',
                    },
                    {
                        id: 5,
                        text: '5 (Strongly Agree)',
                    }
                ],
                value: null,
                required: true,
            }
        ]
    }
})