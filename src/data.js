import assets from './assets/index.js'

const dataObj = [
    {},
    {
        Heading: "Foundation",
        infotxt: "Introduction to core CS concepts, laying the groundwork for all further technical learning.",
        Highlight1: "Built strong fundamentals in programming and algorithms.",
        Highlight2: "Developed first interactive games and explored databases.",
        Project_arr: [
            {
                description: "2D Snake Game built in Python using Pygame.",
                thumbnail: assets.game,
            },
            {
                description: "Student Library Database: Developed CRUD operations app.",
                thumbnail: assets.database,
            },
            {
                description: "Autocomplete Search Bar for websites using JavaScript.",
                thumbnail: assets.autocomplete,
            },
            {
                description: "Canva-inspired Poster Designer: Created basic graphics editor.",
                thumbnail: assets.canva,
            },
        ],
        Skill_arr: [
            ["HTML/CSS/JS", "Python", "SQL"],
            ["Git", "Data Structures", "Algorithms"],
            ["Linux Basics", "Command Line", "Teamwork"],
        ],
    },
    {
        Heading: "Development",
        infotxt: "Dived deeper into application and web development using modern frameworks.",
        Highlight1: "Designed and deployed full-stack apps using MERN and Django.",
        Highlight2: "Learned best practices for responsive and accessible UI.",
        Project_arr: [
            {
                description: "Personal ID Card Generator Web App (React & Node.js).",
                thumbnail: assets.id,
            },
            {
                description: "IPL Match Prediction: Built ML model to predict outcomes.",
                thumbnail: assets.ipl_prediction,
            },
            {
                description: "Recommendation System for books and movies using collaborative filtering.",
                thumbnail: assets.recommandation,
            },
        ],
        Skill_arr: [
            ["React", "Node.js", "MongoDB"],
            ["APIs", "JSON", "Express.js"],
            ["Unit Testing", "Docker Basics", "REST"],
        ],
    },
    {
        Heading: "Specialization",
        infotxt: "Focused on advanced topics: AI, machine learning, and security.",
        Highlight1: "Developed intelligent systems for real-world scenarios.",
        Highlight2: "Participated in competitive programming and security CTFs.",
        Project_arr: [
            {
                description: "Social Media Sentiment Analyzer using NLP models.",
                thumbnail: assets.socialmedia,
            },
            {
                description: "Malware Detection app: Built with ensemble methods.",
                thumbnail: assets.id,
            },
            {
                description: "Game Difficulty Tuner with reinforcement learning.",
                thumbnail: assets.game,
            },
        ],
        Skill_arr: [
            ["Machine Learning", "NLP", "Pandas"],
            ["Cybersecurity", "Competitive Coding", "Linux Advanced"],
            ["GitHub Actions", "CI/CD", "Leadership"],
        ],
    },
    {
        Heading: "Industry Immersion",
        infotxt: "Applied knowledge in real workplace through internships and projects.",
        Highlight1: "Completed internship as a backend developer at TechSoft.",
        Highlight2: "Launched a scalable app in a real production environment.",
        Project_arr: [
            {
                description: "Attendance Tracker for remote teams using face recognition.",
                thumbnail: assets.id,
            },
            {
                description: "Automated Social Media Reporting Tool for marketing analytics.",
                thumbnail: assets.socialmedia,
            },
            {
                description: "E-commerce Product Recommendation with collaborative ML models.",
                thumbnail: assets.recommandation,
            },
        ],
        Skill_arr: [
            ["Cloud Platforms", "DevOps", "Agile"],
            ["API Integration", "Microservices", "Containerization"],
            ["Client Communication", "Documentation", "Presentation"],
        ],
    },
];


export default dataObj;

