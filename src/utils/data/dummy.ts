export const courses = [
    {
        id: "course-1",
        title: "Mastering React and TypeScript",
        imageurl: "",
        description: "A comprehensive guide to mastering React and TypeScript.",
        tags: [
            {
                domain: "Web Development",
                languages: [
                    { name: "JavaScript" },
                    { name: "TypeScript" }
                ]
            }
        ],
        chapters: [
            {
                title: "Introduction to React",
                imageurl: "",
                description: "Learn the basics of React and its core concepts.",
                videoUrl: "https://example.com/intro-react-video.mp4"
            },
            {
                title: "TypeScript Fundamentals",
                imageurl: "",
                description: "Understand the key features of TypeScript and how to use them in React.",
                videoUrl: "https://example.com/typescript-fundamentals-video.mp4"
            },
            {
                title: "Advanced React Patterns",
                imageurl: "",
                description: "Explore advanced React patterns and best practices.",
                videoUrl: "https://example.com/advanced-react-video.mp4"
            }
        ]
    },
    {
        id: "course-2",
        title: "Advanced Node.js and Express",
        imageurl: "",
        description: "Deep dive into building web applications with Node.js and Express.",
        tags: [
            {
                domain: "Backend Development",
                languages: [
                    { name: "JavaScript" },
                    { name: "Node.js" }
                ]
            }
        ],
        chapters: [
            {
                title: "Node.js Internals",
                imageurl: "",
                description: "Understand how Node.js works under the hood.",
                videoUrl: "https://example.com/nodejs-internals-video.mp4"
            },
            {
                title: "Building RESTful APIs with Express",
                imageurl: "",
                description: "Learn how to create robust RESTful APIs using Express.",
                videoUrl: "https://example.com/express-apis-video.mp4"
            },
            {
                title: "Database Integration",
                imageurl: "",
                description: "Integrate databases with your Node.js applications.",
                videoUrl: "https://example.com/database-integration-video.mp4"
            }
        ]
    },
    {
        id: "course-3",
        title: "Introduction to Web Development",
        imageurl: "",
        description: "Learn the basics of HTML, CSS, and JavaScript.",
        tags: [
            {
                domain: "Web Development",
                languages: [
                    { name: "HTML" },
                    { name: "CSS" },
                    { name: "JavaScript" }
                ]
            }
        ],
        chapters: [
            {
                title: "HTML Fundamentals",
                imageurl: "",
                description: "Learn the basics of HTML and document structure.",
                videoUrl: "https://example.com/html-fundamentals-video.mp4"
            },
            {
                title: "CSS Styling",
                imageurl: "",
                description: "Master CSS for beautiful and responsive designs.",
                videoUrl: "https://example.com/css-styling-video.mp4"
            },
            {
                title: "JavaScript Basics",
                imageurl: "",
                description: "Get started with JavaScript programming.",
                videoUrl: "https://example.com/javascript-basics-video.mp4"
            }
        ]
    },
    {
        id: "course-4",
        title: "Python for Data Science",
        imageurl: "",
        description: "An introduction to data analysis and machine learning using Python.",
        tags: [
            {
                domain: "Data Science",
                languages: [
                    { name: "Python" }
                ]
            }
        ],
        chapters: [
            {
                title: "Python Basics for Data Science",
                imageurl: "",
                description: "Learn Python fundamentals for data science applications.",
                videoUrl: "https://example.com/python-basics-ds-video.mp4"
            },
            {
                title: "Data Analysis with Pandas",
                imageurl: "",
                description: "Master data manipulation and analysis using Pandas.",
                videoUrl: "https://example.com/pandas-analysis-video.mp4"
            },
            {
                title: "Introduction to Machine Learning",
                imageurl: "",
                description: "Get started with machine learning concepts and techniques.",
                videoUrl: "https://example.com/intro-ml-video.mp4"
            }
        ]
    },
    {
        id: "course-5",
        title: "Machine Learning Fundamentals",
        imageurl: "",
        description: "Understand the key concepts and techniques in machine learning.",
        tags: [
            {
                domain: "Machine Learning",
                languages: [
                    { name: "Python" },
                    { name: "R" }
                ]
            }
        ],
        chapters: [
            {
                title: "Supervised Learning",
                imageurl: "",
                description: "Explore supervised learning algorithms and their applications.",
                videoUrl: "https://example.com/supervised-learning-video.mp4"
            },
            {
                title: "Unsupervised Learning",
                imageurl: "",
                description: "Discover unsupervised learning techniques and clustering algorithms.",
                videoUrl: "https://example.com/unsupervised-learning-video.mp4"
            },
            {
                title: "Model Evaluation and Validation",
                imageurl: "",
                description: "Learn how to evaluate and validate machine learning models.",
                videoUrl: "https://example.com/model-evaluation-video.mp4"
            }
        ]
    }
];

export const getCourseById = (id: string) => {
    return courses.find((c) => c.id === id);
};
