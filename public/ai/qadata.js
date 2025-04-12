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
        answer: "- Programming Fundamentals is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development."
    },
    {
        keywords: ["variables and data types"],
        answer: "- Variables and Data Types is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development."
    },
    {
        keywords: ["control structures", "if/else", "switch"],
        answer: "- Control Structures (If/Else, Switch) is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development."
    },
    {
        keywords: ["loops", "for", "while", "do-while"],
        answer: "- Loops (For, While, Do-While) is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development."
    },
    {
        keywords: ["functions", "methods"],
        answer: "- Functions/Methods is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development."
    },
    {
        keywords: ["recursion"],
        answer: "- Recursion is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development."
    },
    {
        keywords: ["arrays"],
        answer: "- Arrays is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development."
    },
    {
        keywords: ["multidimensional arrays"],
        answer: "- Multidimensional Arrays is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development."
    },
    {
        keywords: ["strings", "string manipulation"],
        answer: "- Strings and String Manipulation is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development."
    },
    {
        keywords: ["object-oriented programming", "oop"],
        answer: "- Object-Oriented Programming (OOP) is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development."
    },
    {
        keywords: ["classes", "objects"],
        answer: "- Classes and Objects is an important concept in programming. This topic covers key aspects such as its definition, how it's used, and its relevance in modern development."
    },
    {
        keywords: ["inheritance"],
        answer: "- Inheritance allows a class to acquire properties and behaviors of another class. It supports code reusability and hierarchical classification."
    },
    {
        keywords: ["polymorphism"],
        answer: "- Polymorphism allows objects to take many forms, enabling the same interface to be used for different data types."
    },
    {
        keywords: ["encapsulation"],
        answer: "- Encapsulation is the bundling of data and methods that operate on the data within a single unit or class, enhancing data protection."
    },
    {
        keywords: ["abstraction"],
        answer: "- Abstraction hides implementation details and shows only functionality, helping reduce complexity."
      },
      {
        keywords: ["interfaces"],
        answer: "- Interfaces define a contract for classes without implementing the methods. Useful in achieving abstraction and multiple inheritance."
      },
      {
        keywords: ["abstract classes"],
        answer: "- Abstract Classes cannot be instantiated and often contain abstract methods meant to be implemented in derived classes."
      },
      {
        keywords: ["constructors", "destructors"],
        answer: "- Constructors initialize objects, while destructors handle cleanup. They're vital in memory and resource management."
      },
      {
        keywords: ["memory management"],
        answer: "- Memory Management involves the efficient allocation, use, and release of memory in applications."
      },
      {
        keywords: ["garbage collection"],
        answer: "- Garbage Collection is an automatic memory management process that reclaims memory occupied by unreachable objects."
      },
      {
        keywords: ["pointers", "references"],
        answer: "- Pointers and References are used to directly access memory and manipulate data efficiently."
      },
      {
        keywords: ["dynamic memory allocation"],
        answer: "- Dynamic Memory Allocation allows programs to request memory during runtime using operators like malloc, calloc, or new."
      },
      {
        keywords: ["exception handling"],
        answer: "- Exception Handling is the process of responding to runtime errors using try, catch, and finally blocks."
      },
      {
        keywords: ["error handling"],
        answer: "- Error Handling involves anticipating, detecting, and resolving application errors to ensure stability."
      },
      {
        keywords: ["file handling"],
        answer: "- File Handling allows reading from and writing to files in various modes like text or binary."
      },
      {
        keywords: ["input/output operations"],
        answer: "- Input/Output Operations involve handling user or system data for processing and displaying results."
      },
      {
        keywords: ["sorting algorithms"],
        answer: "- Sorting Algorithms arrange data in a specific order, commonly used types include bubble sort, merge sort, and quick sort."
      },
      {
        keywords: ["searching algorithms"],
        answer: "- Searching Algorithms help find an element in a dataset, such as linear and binary search."
      },
      {
        keywords: ["big o notation"],
        answer: "- Big O Notation describes the worst-case performance of algorithms in terms of time or space."
      },
      {
        keywords: ["time complexity"],
        answer: "- Time Complexity is a measure of the time an algorithm takes to complete relative to input size."
      },
      {
        keywords: ["space complexity"],
        answer: "- Space Complexity is the total memory space required by an algorithm to run to completion."
      },
      {
        keywords: ["stacks"],
        answer: "- A Stack is a LIFO (Last In First Out) data structure used in recursion, parsing, and backtracking."
      },
      {
        keywords: ["queues"],
        answer: "- A Queue is a FIFO (First In First Out) data structure used in scheduling and buffering."
      },
      {
        keywords: ["linked lists"],
        answer: "- Linked Lists are linear data structures where each element points to the next."
      },
      {
        keywords: ["doubly linked lists"],
        answer: "- Doubly Linked Lists contain links to both the next and previous elements, allowing bidirectional traversal."
      },
      {
        keywords: ["trees"],
        answer: "- Trees are hierarchical data structures used for representing relationships like file systems or DOM."
      },
      {
        keywords: ["binary search tree", "bst"],
        answer: "- Binary Search Trees are sorted binary trees that allow efficient searching, insertion, and deletion."
      },
      {
        keywords: ["heaps"],
        answer: "- Heaps are complete binary trees used to implement priority queues."
      },
      {
        keywords: ["graphs"],
        answer: "- Graphs consist of nodes and edges and are useful in modeling networks and connections."
      },
      {
        keywords: ["graph algorithms", "dfs", "bfs"],
        answer: "- Graph Algorithms like DFS and BFS help in traversing or searching graph data structures."
      },
      {
        keywords: ["hashing"],
        answer: "- Hashing maps data to a fixed-size value, allowing efficient data retrieval using hash functions."
      },
      {
        keywords: ["hash tables"],
        answer: "- Hash Tables store key-value pairs and offer average-case O(1) access time."
      },
      {
        keywords: ["dynamic programming"],
        answer: "- Dynamic Programming solves problems by breaking them down into overlapping subproblems and using memoization."
      },
      {
        keywords: ["greedy algorithms"],
        answer: "- Greedy Algorithms make the locally optimal choice at each step, aiming for a global optimum."
      },
      {
        keywords: ["divide and conquer"],
        answer: "- Divide and Conquer breaks a problem into subproblems, solves them recursively, and combines results."
      },
      {
        keywords: ["backtracking"],
        answer: "- Backtracking explores all possible solutions by building a solution incrementally and abandoning paths that fail."
      },
      {
        keywords: ["concurrency", "parallelism"],
        answer: "- Concurrency and Parallelism improve performance by executing multiple tasks simultaneously or interleaved."
      },
      {
        keywords: ["multithreading"],
        answer: "- Multithreading allows concurrent execution of two or more parts of a program for maximum CPU utilization."
      },
      {
        keywords: ["asynchronous programming"],
        answer: "- Asynchronous Programming improves responsiveness by allowing non-blocking operations."
      },
      {
        keywords: ["promises", "callbacks"],
        answer: "- Promises and Callbacks handle asynchronous events in JavaScript and other languages."
      },
      {
        keywords: ["event loop"],
        answer: "- The Event Loop is a mechanism in JavaScript that handles asynchronous code execution."
      },
      {
        keywords: ["network programming"],
        answer: "- Network Programming enables communication between programs over a network using protocols like TCP/IP."
      },
      {
        keywords: ["sockets"],
        answer: "- Sockets provide a way to establish communication between client and server over a network."
      },
      {
        keywords: ["client-server model"],
        answer: "- The Client-Server Model is a distributed system structure dividing tasks between providers (servers) and requesters (clients)."
      },
      {
        keywords: ["web development"],
        answer: "- Web Development involves creating websites or web applications using technologies like HTML, CSS, JavaScript, and backend tools."
      },
      {
        keywords: ["front-end development"],
        answer: "- Front-End Development focuses on building the visual part of websites users interact with."
      },
      {
        keywords: ["react"],
        answer: "- React is a JavaScript library for building fast and interactive user interfaces."
    },
    {
        keywords: ["vue.js"],
        answer: "- Vue.js is a progressive JavaScript framework for building UIs and single-page applications."
    },
    {
        keywords: ["angular"],
        answer: "- Angular is a TypeScript-based framework used for building scalable front-end applications."
    },
    {
        keywords: ["back-end development"],
        answer: "- Back-End Development focuses on server-side logic, databases, and API communication."
    },
    {
        keywords: ["node.js"],
        answer: "- Node.js is a runtime environment that lets you run JavaScript on the server."
    },
    {
        keywords: ["express.js"],
        answer: "- Express.js is a web application framework for Node.js used for building APIs and web servers."
    },
    {
        keywords: ["python web"],
        answer: "- Python can be used for web development using frameworks like Django and Flask."
    },
    {
        keywords: ["ruby on rails"],
        answer: "- Ruby on Rails is a server-side web application framework written in Ruby."
    },
    {
        keywords: ["django"],
        answer: "- Django is a high-level Python web framework that promotes rapid development and clean design."
    },
    {
        keywords: ["flask"],
        answer: "- Flask is a lightweight Python web framework ideal for small applications and APIs."
    },
    {
        keywords: ["databases", "sql", "nosql"],
        answer: "- Databases are structured collections of data; SQL and NoSQL are two primary types."
    },
    {
        keywords: ["mysql"],
        answer: "- MySQL is a popular open-source relational database management system."
    },
    {
        keywords: ["postgresql"],
        answer: "- PostgreSQL is a powerful, open-source object-relational database system."
    },
    {
        keywords: ["mongodb"],
        answer: "- MongoDB is a NoSQL document-oriented database used for high-volume data storage."
    },
    {
        keywords: ["sqlite"],
        answer: "- SQLite is a lightweight, file-based relational database used for local storage."
    },
    {
        keywords: ["database design"],
        answer: "- Database Design involves planning the structure and relationships of data for optimal storage and access."
    },
    {
        keywords: ["orm"],
        answer: "- ORM (Object-Relational Mapping) allows you to interact with databases using object-oriented code."
    },
    {
        keywords: ["restful apis"],
        answer: "- RESTful APIs use HTTP methods and are based on REST principles for building scalable services."
    },
    {
        keywords: ["graphql"],
        answer: "- GraphQL is a query language for APIs and a runtime for executing those queries."
    },
    {
        keywords: ["web services"],
        answer: "- Web Services allow communication between machines over a network using standards like SOAP and REST."
    },
    {
        keywords: ["git", "github", "version control"],
        answer: "- Version Control using Git and GitHub helps track and manage changes to source code."
    },
    {
        keywords: ["git workflow"],
        answer: "- Git Workflow defines branching and merging models to collaborate on software efficiently."
    },
    {
        keywords: ["docker", "containers"],
        answer: "- Docker allows you to package applications into containers for consistent deployment."
    },
    {
        keywords: ["ci/cd"],
        answer: "- CI/CD refers to Continuous Integration and Deployment, improving software delivery speed and quality."
    },
    {
        keywords: ["devops"],
        answer: "- DevOps is a set of practices that combines software development and IT operations."
    },
    {
        keywords: ["cloud computing"],
        answer: "- Cloud Computing delivers computing services over the internet with flexible scalability."
    },
    {
        keywords: ["aws"],
        answer: "- AWS (Amazon Web Services) offers on-demand cloud computing platforms and APIs."
    },
    {
        keywords: ["azure"],
        answer: "- Microsoft Azure is a cloud platform for building, deploying, and managing applications."
    },
    {
        keywords: ["google cloud", "gcp"],
        answer: "- Google Cloud Platform provides cloud services for computing, storage, machine learning, and more."
    },
    {
        keywords: ["serverless"],
        answer: "- Serverless Architecture lets you build and run applications without managing servers."
    },
    {
        keywords: ["mobile development"],
        answer: "- Mobile App Development involves creating software for smartphones and tablets."
    },
    {
        keywords: ["android", "kotlin", "java android"],
        answer: "- Android Development uses Java or Kotlin to create native Android apps."
    },
    {
        keywords: ["ios", "swift"],
        answer: "- iOS Development uses Swift and Objective-C for building apps on Apple devices."
    },
    {
        keywords: ["flutter", "react native"],
        answer: "- Cross-Platform Development tools like Flutter and React Native enable building apps for iOS and Android with one codebase."
    },
    {
        keywords: ["game development"],
        answer: "- Game Development involves designing, coding, and testing interactive games."
    },
    {
        keywords: ["unity"],
        answer: "- Unity is a cross-platform game engine used for building 2D and 3D games."
    },
    {
        keywords: ["unreal engine"],
        answer: "- Unreal Engine is a powerful game development engine developed by Epic Game."
    },
    {
        keywords: ["c++"],
        answer: "- C++ is a high-performance language used in system software, game engines, and more."
    },
    {
        keywords: ["java"],
        answer: "- Java is a versatile, object-oriented language widely used for web, mobile, and desktop apps."
    },
    {
        keywords: ["python"],
        answer: "- Python is a high-level, interpreted language known for simplicity and readability."
    },
    {
        keywords: ["ruby"],
        answer: "- Ruby is an expressive, easy-to-read language often used in web development."
    },
    {
        keywords: ["functional programming"],
        answer: "- Functional Programming emphasizes immutability, first-class functions, and pure functions."
    }
];