const qaData = [
    {
        keywords: ["javascript", "js", ".js"],
        answer: `- JavaScript is a versatile programming language mainly used for web development.

                - It allows developers to add interactivity, control multimedia, animate elements, and build complex web applications.

                - JavaScript is one of the core technologies of the web, alongside HTML and CSS.`
    },
    {
        keywords: ["html", "html5"],
        answer: `- HTML stands for HyperText Markup Language and is used to structure content on the web.`
    },
    {
        keywords: ["css", "Cascading Style Sheets"],
        answer: `- CSS stands for Cascading Style Sheets and is used to style the layout of web pages.`
    },
    {
        keywords: ["brendan eich"],
        answer: `- JavaScript was created by Brendan Eich in 1995 while working at Netscape.`
    },
    {
        keywords: ["let", "var"],
        answer: `- let is block-scoped, while var is function-scoped. let is generally preferred in modern JavaScript.`
    },
    {
        keywords: ["programming fundamentals"],
        answer: "Programming Fundamentals is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development. (Topic 1)"
    },
    {
        keywords: ["variables and data types"],
        answer: "Variables and Data Types is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development. (Topic 2)"
    },
    {
        keywords: ["control structures", "if/else", "switch"],
        answer: "Control Structures (If/Else, Switch) is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development. (Topic 3)"
    },
    {
        keywords: ["loops", "for", "while", "do-while"],
        answer: "Loops (For, While, Do-While) is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development. (Topic 4)"
    },
    {
        keywords: ["functions", "methods"],
        answer: "Functions/Methods is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development. (Topic 5)"
    },
    {
        keywords: ["recursion"],
        answer: "Recursion is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development. (Topic 6)"
    },
    {
        keywords: ["arrays"],
        answer: "Arrays is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development. (Topic 7)"
    },
    {
        keywords: ["multidimensional arrays"],
        answer: "Multidimensional Arrays is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development. (Topic 8)"
    },
    {
        keywords: ["strings", "string manipulation"],
        answer: "Strings and String Manipulation is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development. (Topic 9)"
    },
    {
        keywords: ["object-oriented programming", "oop"],
        answer: "Object-Oriented Programming (OOP) is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development. (Topic 10)"
    },
    {
        keywords: ["classes", "objects"],
        answer: "Classes and Objects is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development. (Topic 11)"
      },
      {
        keywords: ["inheritance"],
        answer: "Inheritance allows a class to acquire properties and behaviors of another class. It supports code reusability and hierarchical classification. (Topic 12)"
      },
      {
        keywords: ["polymorphism"],
        answer: "Polymorphism allows objects to take many forms, enabling the same interface to be used for different data types. (Topic 13)"
      },
      {
        keywords: ["encapsulation"],
        answer: "Encapsulation is the bundling of data and methods that operate on the data within a single unit or class, enhancing data protection. (Topic 14)"
      },
      {
        keywords: ["abstraction"],
        answer: "Abstraction hides implementation details and shows only functionality, helping reduce complexity. (Topic 15)"
      },
      {
        keywords: ["interfaces"],
        answer: "Interfaces define a contract for classes without implementing the methods. Useful in achieving abstraction and multiple inheritance. (Topic 16)"
      },
      {
        keywords: ["abstract classes"],
        answer: "Abstract Classes cannot be instantiated and often contain abstract methods meant to be implemented in derived classes. (Topic 17)"
      },
      {
        keywords: ["constructors", "destructors"],
        answer: "Constructors initialize objects, while destructors handle cleanup. They're vital in memory and resource management. (Topic 18)"
      },
      {
        keywords: ["memory management"],
        answer: "Memory Management involves the efficient allocation, use, and release of memory in applications. (Topic 19)"
      },
      {
        keywords: ["garbage collection"],
        answer: "Garbage Collection is an automatic memory management process that reclaims memory occupied by unreachable objects. (Topic 20)"
      },
      {
        keywords: ["pointers", "references"],
        answer: "Pointers and References are used to directly access memory and manipulate data efficiently. (Topic 21)"
      },
      {
        keywords: ["dynamic memory allocation"],
        answer: "Dynamic Memory Allocation allows programs to request memory during runtime using operators like malloc, calloc, or new. (Topic 22)"
      },
      {
        keywords: ["exception handling"],
        answer: "Exception Handling is the process of responding to runtime errors using try, catch, and finally blocks. (Topic 23)"
      },
      {
        keywords: ["error handling"],
        answer: "Error Handling involves anticipating, detecting, and resolving application errors to ensure stability. (Topic 24)"
      },
      {
        keywords: ["file handling"],
        answer: "File Handling allows reading from and writing to files in various modes like text or binary. (Topic 25)"
      },
      {
        keywords: ["input/output operations"],
        answer: "Input/Output Operations involve handling user or system data for processing and displaying results. (Topic 26)"
      },
      {
        keywords: ["sorting algorithms"],
        answer: "Sorting Algorithms arrange data in a specific order, commonly used types include bubble sort, merge sort, and quick sort. (Topic 27)"
      },
      {
        keywords: ["searching algorithms"],
        answer: "Searching Algorithms help find an element in a dataset, such as linear and binary search. (Topic 28)"
      },
      {
        keywords: ["big o notation"],
        answer: "Big O Notation describes the worst-case performance of algorithms in terms of time or space. (Topic 29)"
      },
      {
        keywords: ["time complexity"],
        answer: "Time Complexity is a measure of the time an algorithm takes to complete relative to input size. (Topic 30)"
      },
      {
        keywords: ["space complexity"],
        answer: "Space Complexity is the total memory space required by an algorithm to run to completion. (Topic 31)"
      },
      {
        keywords: ["stacks"],
        answer: "A Stack is a LIFO (Last In First Out) data structure used in recursion, parsing, and backtracking. (Topic 32)"
      },
      {
        keywords: ["queues"],
        answer: "A Queue is a FIFO (First In First Out) data structure used in scheduling and buffering. (Topic 33)"
      },
      {
        keywords: ["linked lists"],
        answer: "Linked Lists are linear data structures where each element points to the next. (Topic 34)"
      },
      {
        keywords: ["doubly linked lists"],
        answer: "Doubly Linked Lists contain links to both the next and previous elements, allowing bidirectional traversal. (Topic 35)"
      },
      {
        keywords: ["trees"],
        answer: "Trees are hierarchical data structures used for representing relationships like file systems or DOM. (Topic 36)"
      },
      {
        keywords: ["binary search tree", "bst"],
        answer: "Binary Search Trees are sorted binary trees that allow efficient searching, insertion, and deletion. (Topic 37)"
      },
      {
        keywords: ["heaps"],
        answer: "Heaps are complete binary trees used to implement priority queues. (Topic 38)"
      },
      {
        keywords: ["graphs"],
        answer: "Graphs consist of nodes and edges and are useful in modeling networks and connections. (Topic 39)"
      },
      {
        keywords: ["graph algorithms", "dfs", "bfs"],
        answer: "Graph Algorithms like DFS and BFS help in traversing or searching graph data structures. (Topic 40)"
      },
      {
        keywords: ["hashing"],
        answer: "Hashing maps data to a fixed-size value, allowing efficient data retrieval using hash functions. (Topic 41)"
      },
      {
        keywords: ["hash tables"],
        answer: "Hash Tables store key-value pairs and offer average-case O(1) access time. (Topic 42)"
      },
      {
        keywords: ["dynamic programming"],
        answer: "Dynamic Programming solves problems by breaking them down into overlapping subproblems and using memoization. (Topic 43)"
      },
      {
        keywords: ["greedy algorithms"],
        answer: "Greedy Algorithms make the locally optimal choice at each step, aiming for a global optimum. (Topic 44)"
      },
      {
        keywords: ["divide and conquer"],
        answer: "Divide and Conquer breaks a problem into subproblems, solves them recursively, and combines results. (Topic 45)"
      },
      {
        keywords: ["backtracking"],
        answer: "Backtracking explores all possible solutions by building a solution incrementally and abandoning paths that fail. (Topic 46)"
      },
      {
        keywords: ["concurrency", "parallelism"],
        answer: "Concurrency and Parallelism improve performance by executing multiple tasks simultaneously or interleaved. (Topic 47)"
      },
      {
        keywords: ["multithreading"],
        answer: "Multithreading allows concurrent execution of two or more parts of a program for maximum CPU utilization. (Topic 48)"
      },
      {
        keywords: ["asynchronous programming"],
        answer: "Asynchronous Programming improves responsiveness by allowing non-blocking operations. (Topic 49)"
      },
      {
        keywords: ["promises", "callbacks"],
        answer: "Promises and Callbacks handle asynchronous events in JavaScript and other languages. (Topic 50)"
      },
      {
        keywords: ["event loop"],
        answer: "The Event Loop is a mechanism in JavaScript that handles asynchronous code execution. (Topic 51)"
      },
      {
        keywords: ["network programming"],
        answer: "Network Programming enables communication between programs over a network using protocols like TCP/IP. (Topic 52)"
      },
      {
        keywords: ["sockets"],
        answer: "Sockets provide a way to establish communication between client and server over a network. (Topic 53)"
      },
      {
        keywords: ["client-server model"],
        answer: "The Client-Server Model is a distributed system structure dividing tasks between providers (servers) and requesters (clients). (Topic 54)"
      },
      {
        keywords: ["web development"],
        answer: "Web Development involves creating websites or web applications using technologies like HTML, CSS, JavaScript, and backend tools. (Topic 55)"
      },
      {
        keywords: ["front-end development"],
        answer: "Front-End Development focuses on building the visual part of websites users interact with. (Topic 56)"
      },
      {
        keywords: ["html", "css"],
        answer: "HTML and CSS are core technologies for building structured and styled web content. (Topic 57)"
      },
      {
        keywords: ["javascript"],
        answer: "JavaScript is a scripting language that enables interactivity in web pages. (Topic 58)"
      },
      {
        keywords: ["react"],
        answer: "React is a JavaScript library for building fast and interactive user interfaces. (Topic 59)"
      },
      {
        keywords: ["vue.js"],
        answer: "Vue.js is a progressive JavaScript framework for building UIs and single-page applications. (Topic 60)"
      },
      {
        keywords: ["angular"],
        answer: "Angular is a TypeScript-based framework used for building scalable front-end applications. (Topic 61)"
      },
      {
        keywords: ["back-end development"],
        answer: "Back-End Development focuses on server-side logic, databases, and API communication. (Topic 62)"
      },
      {
        keywords: ["node.js"],
        answer: "Node.js is a runtime environment that lets you run JavaScript on the server. (Topic 63)"
      },
      {
        keywords: ["express.js"],
        answer: "Express.js is a web application framework for Node.js used for building APIs and web servers. (Topic 64)"
      },
      {
        keywords: ["python web"],
        answer: "Python can be used for web development using frameworks like Django and Flask. (Topic 65)"
      },
      {
        keywords: ["ruby on rails"],
        answer: "Ruby on Rails is a server-side web application framework written in Ruby. (Topic 66)"
      },
      {
        keywords: ["django"],
        answer: "Django is a high-level Python web framework that promotes rapid development and clean design. (Topic 67)"
      },
      {
        keywords: ["flask"],
        answer: "Flask is a lightweight Python web framework ideal for small applications and APIs. (Topic 68)"
      },
      {
        keywords: ["databases", "sql", "nosql"],
        answer: "Databases are structured collections of data; SQL and NoSQL are two primary types. (Topic 69)"
      },
      {
        keywords: ["mysql"],
        answer: "MySQL is a popular open-source relational database management system. (Topic 70)"
      },
      {
        keywords: ["postgresql"],
        answer: "PostgreSQL is a powerful, open-source object-relational database system. (Topic 71)"
      },
      {
        keywords: ["mongodb"],
        answer: "MongoDB is a NoSQL document-oriented database used for high-volume data storage. (Topic 72)"
      },
      {
        keywords: ["sqlite"],
        answer: "SQLite is a lightweight, file-based relational database used for local storage. (Topic 73)"
      },
      {
        keywords: ["database design"],
        answer: "Database Design involves planning the structure and relationships of data for optimal storage and access. (Topic 74)"
      },
      {
        keywords: ["orm"],
        answer: "ORM (Object-Relational Mapping) allows you to interact with databases using object-oriented code. (Topic 75)"
      },
      {
        keywords: ["restful apis"],
        answer: "RESTful APIs use HTTP methods and are based on REST principles for building scalable services. (Topic 76)"
      },
      {
        keywords: ["graphql"],
        answer: "GraphQL is a query language for APIs and a runtime for executing those queries. (Topic 77)"
      },
      {
        keywords: ["web services"],
        answer: "Web Services allow communication between machines over a network using standards like SOAP and REST. (Topic 78)"
      },
      {
        keywords: ["git", "github", "version control"],
        answer: "Version Control using Git and GitHub helps track and manage changes to source code. (Topic 79)"
      },
      {
        keywords: ["git workflow"],
        answer: "Git Workflow defines branching and merging models to collaborate on software efficiently. (Topic 80)"
      },
      {
        keywords: ["docker", "containers"],
        answer: "Docker allows you to package applications into containers for consistent deployment. (Topic 81)"
      },
      {
        keywords: ["ci/cd"],
        answer: "CI/CD refers to Continuous Integration and Deployment, improving software delivery speed and quality. (Topic 82)"
      },
      {
        keywords: ["devops"],
        answer: "DevOps is a set of practices that combines software development and IT operations. (Topic 83)"
      },
      {
        keywords: ["cloud computing"],
        answer: "Cloud Computing delivers computing services over the internet with flexible scalability. (Topic 84)"
      },
      {
        keywords: ["aws"],
        answer: "AWS (Amazon Web Services) offers on-demand cloud computing platforms and APIs. (Topic 85)"
      },
      {
        keywords: ["azure"],
        answer: "Microsoft Azure is a cloud platform for building, deploying, and managing applications. (Topic 86)"
      },
      {
        keywords: ["google cloud", "gcp"],
        answer: "Google Cloud Platform provides cloud services for computing, storage, machine learning, and more. (Topic 87)"
      },
      {
        keywords: ["serverless"],
        answer: "Serverless Architecture lets you build and run applications without managing servers. (Topic 88)"
      },
      {
        keywords: ["mobile development"],
        answer: "Mobile App Development involves creating software for smartphones and tablets. (Topic 89)"
      },
      {
        keywords: ["android", "kotlin", "java android"],
        answer: "Android Development uses Java or Kotlin to create native Android apps. (Topic 90)"
      },
      {
        keywords: ["ios", "swift"],
        answer: "iOS Development uses Swift and Objective-C for building apps on Apple devices. (Topic 91)"
      },
      {
        keywords: ["flutter", "react native"],
        answer: "Cross-Platform Development tools like Flutter and React Native enable building apps for iOS and Android with one codebase. (Topic 92)"
      },
      {
        keywords: ["game development"],
        answer: "Game Development involves designing, coding, and testing interactive games. (Topic 93)"
      },
      {
        keywords: ["unity"],
        answer: "Unity is a cross-platform game engine used for building 2D and 3D games. (Topic 94)"
      },
      {
        keywords: ["unreal engine"],
        answer: "Unreal Engine is a powerful game development engine developed by Epic Games. (Topic 95)"
      },
      {
        keywords: ["c++"],
        answer: "C++ is a high-performance language used in system software, game engines, and more. (Topic 96)"
      },
      {
        keywords: ["java"],
        answer: "Java is a versatile, object-oriented language widely used for web, mobile, and desktop apps. (Topic 97)"
      },
      {
        keywords: ["python"],
        answer: "Python is a high-level, interpreted language known for simplicity and readability. (Topic 98)"
      },
      {
        keywords: ["ruby"],
        answer: "Ruby is an expressive, easy-to-read language often used in web development. (Topic 99)"
    },
    {
        keywords: ["functional programming"],
        answer: "Functional Programming emphasizes immutability, first-class functions, and pure functions. (Topic 100)"
    }
];