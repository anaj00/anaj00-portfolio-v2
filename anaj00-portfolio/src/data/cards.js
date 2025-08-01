export default [
  {
    tag: "UI/UX Design",
    title: "Twiggy: Kalikasan Kits and Plant Companion App",
    description:
      "A collectible blind box plant kit with a gamified mobile app for discovering and caring for surprise plants.",
    longDescription: `Twiggy combines physical collectible "Kalikasan Kits" — which contain surprise plant cuttings like Hoyas and succulents — with a mobile companion app. When users scan the QR code inside each kit, they unlock a digital plant buddy in the app, enabling them to track care routines and grow their collection. The app aims to encourage mindful plant care through gamified interactions and seasonal collection drops.`,
    highlights: [
      "Designed a cohesive physical-digital product experience combining surprise plant unboxing with mobile interaction.",
      "Led UI/UX for the Twiggy app prototype, focusing on onboarding flow, plant care dashboard, and collectible management.",
      "Conducted iterative prototyping and user testing to validate core interaction loops and collection mechanics.",
      "Planned seasonal drop system for plant kits and corresponding in-app collectible rewards.",
    ],
    tech: [
      { label: "Figma", icon: "mdi-vector-square" },
      { label: "Flutter (planned)", icon: "mdi-cellphone" },
      { label: "Gamification", icon: "mdi-gamepad-variant" },
      { label: "UI/UX Design", icon: "mdi-palette-swatch" },
    ],
    links: [
      {
        title: "Prototype (Figma)",
        icon: "mdi-open-in-new",
        href: "https://www.figma.com/proto/vNYFiGKblA3LRKR3JhWMKH/MVP?page-id=2%3A2&node-id=67-1360&viewport=-3230%2C-241%2C0.42&t=qfdxo5PgyPk2VGXq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=60%3A1136",
      },
    ],
    cardImage: "/twiggy/11.png",
    images: [
      "/twiggy/11.png",
      "/twiggy/4.png",
      "/twiggy/5.png",
      "/twiggy/7.png",
      "/twiggy/8.png",
      "/twiggy/9.png",
    ],
  },
  {
    tag: "Data Science / AI",
    title:
      "Corallian: Coral Segmentation and Classification using Deep Learning (Undergraduate Thesis)",
    description:
      "Developing a deep learning pipeline to segment and classify coral species from underwater imagery.",
    longDescription: `My thesis focuses on developing a deep learning pipeline to segment and classify coral species from underwater imagery. The system is divided into two core components: a segmentation model for identifying coral regions, and a classification model to label those regions with their corresponding species (TAU labels). The project addresses data imbalance challenges and integrates advanced techniques such as ASPP, ResNet with HDC, and visual embeddings.`,
    highlights: [
      "Implemented a segmentation pipeline using a ResNet+ASPP+DUC architecture.",
      "Built a classification pipeline leveraging high-dimensional convolution (HDC) and softmax-based species prediction.",
      "Trained on a curated dataset from the SHORE program (2024 subset), handling class imbalance and data preprocessing.",
      "Utilized PyTorch for model development and Slurm for distributed training on P40 GPU nodes.",
      "Improved model accuracy by optimizing input scaling, up/downsampling strategies, and feature embedding.",
    ],
    tech: [
      { label: "Deep Learning", icon: "mdi-brain" },
      { label: "Image Segmentation", icon: "mdi-image" },
      { label: "PyTorch", icon: "mdi-language-python" },
      { label: "ResNet", icon: "mdi-cogs" },
      { label: "Slurm", icon: "mdi-server" },
    ],
    links: [
      {
        title: "GitHub",
        icon: "mdi-github",
        href: "https://github.com/Corallian-Coral-yan",
      },
    ],
    cardImage: "/corallian/1.png",
    images: ["/corallian/1.png"],
  },
  {
    tag: "Software Development",
    title: "FurMate: Android Pet Health Management App",
    description: `
        FurMate is an Android app that helps pet owners manage their pet’s health records, vaccination history, and documents in one place. 
        Built with Android Studio and Firebase, it offers real-time syncing, offline accessibility, and a seamless user experience.
      `,
    longDescription: `
        <p>
        <strong>FurMate</strong> is an Android application designed to help pet owners conveniently manage their pet’s health records, vaccination history, and documents—all in one place. 
        </p><br>

        <p>
        Developed using Android Studio with Firebase as the backend. FurMate features real-time syncing and offline accessibility, ensuring users have access to vital pet data even without internet connectivity. 
        </p><br>
        
        <p>I served as the frontend developer, focusing on building an intuitive and responsive user interface that delivers a seamless user experience.
        </p>`,
    cardImage: "/furmate/cardImage.jpg",
    images: [
      "/furmate/12.jpg",
      "/furmate/13.jpg",
      "/furmate/14.jpg",
      "/furmate/15.jpg",
      "/furmate/16.jpg",
      "/furmate/17.jpg",
      "/furmate/18.jpg",
      "/furmate/19.jpg",
      "/furmate/20.jpg",
    ],
    tech: [
      { label: "Android Studio", icon: "mdi-android" },
      { label: "Firebase", icon: "mdi-fire" },
      { label: "Kotlin", icon: "mdi-language-kotlin" },
      { label: "XML", icon: "mdi-code-braces" },
    ],
    highlights: [
      "Designed and implemented the mobile frontend using Material Design components and XML layouts.",
      "Integrated Firebase services for authentication, real-time database, and cloud storage.",
      "Developed an offline-first experience, syncing local data with the cloud when internet is available.",
      "Created UI flows for managing pet profiles, medical history, and appointment tracking.",
    ],
    links: [
      {
        title: "GitHub Repo",
        href: "https://github.com/anaj00/MOBDEVE-FurMate",
        icon: "mdi-github",
      },
    ],
  },
  {
    tag: "UI/UX Design",
    title: "asHelp: An App Prototype",
    description: `
        A mobile app prototype designed to connect parents of children in the spectrum to nearby developmental pediatricians—built through end-to-end user research and UX design.
    `,
    longDescription: `
        <p>
        <strong>asHelp</strong> is a mobile app prototype developed to support parents of children on the autism spectrum by helping them easily connect with developmental pediatricians in their area. 
        This project was created as part of the course <em>STHCIUX</em> and stemmed from the observed difficulty in finding accessible, reliable medical support.
        </p><br>

        <p>
        Our team conducted comprehensive user research—from speaking directly with parents and caregivers to reaching out to practicing developmental pediatricians. 
        These insights guided the development of user personas, journey maps, and ultimately a wireframed prototype of the app.
        </p><br>

        <p>
        The prototype focuses on usability and accessibility, offering parents a user-friendly interface to search, connect, and communicate with specialists nearby.
        </p>
    `,
    cardImage: "/ashelp/1.png",
    images: ["/ashelp/1.png"],
    tech: [
      { label: "Figma", icon: "mdi-vector-square" },
      { label: "User Research", icon: "mdi-account-search" },
      { label: "Prototyping", icon: "mdi-cellphone-cog" },
    ],
    highlights: [
      "Designed and prototyped a mobile app to connect users to developmental pediatricians.",
      "Conducted interviews and research with both parents and medical professionals.",
      "Created user personas, journey maps, and wireframes based on real user insights.",
      "Developed an interactive and accessible prototype using Figma.",
    ],
    links: [
      {
        title: "Prototype",
        href: "https://www.figma.com/proto/jx34qnkg7o9K0p7TGez66a/-STHCIUX--App-Prototype?page-id=0%3A1&node-id=1-179&node-type=canvas&viewport=-364%2C-1751%2C0.37&t=SwIkJhrZWNopUxF8-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A179",
        icon: "mdi-open-in-new",
      },
    ],
  },
  {
    tag: "Software Development",
    title: "Process Multiplexer & CLI Emulation",
    description: `
        A C++ project that emulates a process multiplexer and custom command-line interface (CLI) to simulate operating system behavior 
        for handling multiple concurrent processes. Focused on multi-threading and concurrency management, this project helps deepen system-level programming skills.
      `,
    longDescription: `
        <p>
        This project emulates a process multiplexer and a custom command-line interface (CLI) using C++. 
        It simulates basic operating system behavior for handling multiple processes concurrently. 
        </p><br>

        <p>
        A major focus was on implementing multi-threading and managing concurrency to emulate realistic process scheduling and execution.
        </p><br>

        <p>
        Key challenges included handling race conditions, synchronization, and using mutexes and condition variables to manage multi-threaded processes.
        </p><br>

        This project strengthened my understanding of system-level programming and concurrent execution models.
      `,
    cardImage: "/opesy/1.png",
    images: ["/opesy/1.png"],
    tech: [
      { label: "C++", icon: "mdi-language-cpp" },
      { label: "Multithreading", icon: "mdi-code-braces" },
    ],
    highlights: [
      "Built a process multiplexer capable of handling concurrent tasks.",
      "Designed and implemented a custom CLI for user interaction and process control.",
      "Utilized C++ threading to simulate parallel process execution.",
      "Handled concurrency challenges such as race conditions and synchronization using mutexes and condition variables.",
      "Strengthened understanding of system-level programming and concurrent execution models.",
    ],
    links: [
      {
        title: "GitHub Repo",
        href: "https://github.com/anaj00/CSOPESY-MCO-OS-Emulator",
        icon: "mdi-github",
      },
    ],
  },
  {
    tag: "Software Development",
    title: "Binary-64 Floating Point Simulator",
    description: `
        Developed as part of a Computer Architecture course, this Binary-64 Floating Point Simulator allows users to input and convert between binary and decimal 
        based on IEEE 754 standards. The application visualizes the structure of 64-bit floating-point numbers, including the sign, exponent, and mantissa.
      `,
    longDescription: `
        <p>
        This project, developed for the CSARCH2 (Computer Architecture) course, is a Binary-64 Floating Point Simulator built to convert and visualize binary and decimal inputs 
        based on the IEEE 754 standards. 
        </p><br>
        <p>
        Using Vue.js and Vuetify, the frontend provides real-time interactive conversion and visualization of the floating-point number components 
        (sign, exponent, mantissa). It supports both binary-to-decimal and decimal-to-binary conversions and helps reinforce understanding of the IEEE 754 binary64 representation.
      `,
    cardImage: "/binary-64/1.png",
    images: ["/binary-64/1.png", "/binary-64/2.png"],
    tech: [
      { label: "Vue.js", icon: "mdi-language-vue" },
      { label: "Vuetify", icon: "mdi-vuetify" },
      { label: "JavaScript", icon: "mdi-language-javascript" },
    ],
    highlights: [
      "Built an intuitive frontend interface with Vuetify for real-time input and visual conversion.",
      "Supported both binary-to-decimal and decimal-to-binary conversions.",
      "Provided a detailed breakdown of floating-point components: sign, exponent, and mantissa.",
      "Reinforced understanding of IEEE 754 binary64 representation.",
    ],
    links: [
      {
        title: "GitHub Repo",
        href: "https://github.com/svcheng/CSARCH2-Simulation-Project",
        icon: "mdi-github",
      },
      {
        title: "Live Demo",
        href: "https://csarch-2-simulation-project-tau.vercel.app/",
        icon: "mdi-open-in-new",
      },
    ],
  },
  {
    tag: "Software Development",
    title: "PetterCare: Pet Health & Wellness Web Platform",
    description: `
        PetterCare is a web platform designed for pet owners to manage their pets' health records, track wellness, and access expert advice. 
        As Product Owner and Frontend Web Designer, I led the design and implementation of a responsive, user-centric interface using React, TypeScript, and Tailwind CSS.
      `,
    longDescription: `
        <p>
        PetterCare is an innovative web platform aimed at improving pet care by offering a centralized hub for pet owners to manage their pets' health records, set reminders, and seek expert advice. 
        </p><br>

        <p>
        As the <strong>Product Owner</strong>, I was responsible for setting the vision, prioritizing features, and coordinating the team. 
        </p><br>

        <p>
        As the <strong>Frontend Web Designer</strong>, I focused on designing an intuitive, mobile-friendly interface with React and TypeScript, ensuring code scalability, type safety, and a clean user experience. Tailwind CSS was used to implement the platform's responsive design.
        </p><br>
      `,
    cardImage: "petter-care/1.png",
    images: ["/petter-care/1.png", "/petter-care/2.png"],
    tech: [
      { label: "React.js", icon: "mdi-react" },
      { label: "TypeScript", icon: "mdi-language-typescript" },
      { label: "Tailwind CSS", icon: "mdi-tailwind" },
    ],
    highlights: [
      "Led product planning, feature prioritization, and team coordination as Product Owner.",
      "Designed and implemented a responsive, mobile-friendly UI using React + Tailwind CSS.",
      "Focused on clean UI/UX for health tracking, reminders, and informational content.",
      "Ensured scalability and type safety with TypeScript integration.",
      "Made user-centric design decisions based on feedback and research.",
    ],
    links: [
      {
        title: "GitHub Repo",
        href: "https://github.com/Ethea2/petter-care",
        icon: "mdi-github",
      },
    ],
  },
  {
    tag: "Software Development",
    title: "Loan Management System for Luzon-Based Cooperative (NGO Client)",
    description: `
        Developed a custom loan management system for an NGO cooperative in Luzon, focusing on streamlining loan applications, member records, and repayment tracking. 
        As the web designer, I created responsive and user-friendly interfaces using Vue.js and Vuetify while collaborating with the client and following Agile Scrum methodology.
      `,
    longDescription: `
        <p>
        This project involved the development of a loan management system for a Luzon-based cooperative, designed to facilitate loan applications, member record management, and repayment tracking. 
        </p><br>
        <p>
        I was the <strong>sole web designer</strong>, responsible for crafting an intuitive, responsive interface using Vue.js and Vuetify. 
        </p><br>
        <p>
        The system was built in close collaboration with the client, ensuring it met their specific needs. The project followed Agile Scrum methodology, allowing for continuous feedback and iterative development to refine the system over time.
        </p><br>
      `,
    cardImage: "/unbound/1.png",
    images: [
      "/unbound/1.png",
      "/unbound/2.png",
      "/unbound/3.png",
      "/unbound/4.png",
      "/unbound/5.png",
    ],
    tech: [
      { label: "Vue.js", icon: "mdi-vuejs" },
      { label: "Vuetify", icon: "mdi-vuetify" },
      { label: "HTML", icon: "mdi-language-html5" },
      { label: "JavaScript", icon: "mdi-language-javascript" },
    ],
    highlights: [
      "Designed and implemented a responsive, user-friendly interface using Vue.js and Vuetify.",
      "Streamlined loan applications, member records, and repayment tracking functionalities.",
      "Collaborated closely with the NGO client to ensure the system met their needs.",
      "Followed Agile Scrum methodology for continuous feedback and iterative delivery.",
    ],
    links: [
      {
        title: "GitHub Repo",
        href: "https://github.com/Dwigoric/unboundmnl-area-2",
        icon: "mdi-github",
      },
    ],
  },
  {
    tag: "Software Development",
    title: "Tastee: Food Review Website for Metro Restaurants",
    description: `
        Developed a food review platform that enables users to rate and review restaurants across the Metro. Contributed to both frontend and backend development using Node.js and Handlebars for dynamic views, ensuring a smooth and responsive user experience.
      `,
    longDescription: `
        <p>
        <strong>Tastee</strong> is a food review website designed to allow users to rate and review restaurants across the Metro. 
        </p><br>
        <p>
        I developed both the frontend and backend development, utilizing Node.js for the backend logic, user authentication, and data storage. Handlebars was used for templating, enabling the creation of dynamic views that rendered quickly and were easy to maintain. 
        </p><br>
        
        The platform allows users to submit ratings, comments, and photos, providing a rich and interactive experience. The website was designed with responsiveness in mind to ensure it functions seamlessly on both desktop and mobile devices.
      `,
    cardImage: "/tastee/tastee.png",
    images: ["/tastee/tastee.png"],

    tech: [
      { label: "Node.js", icon: "mdi-nodejs" },
      { label: "Handlebars.js", icon: "mdi-language-javascript" },
      { label: "HTML", icon: "mdi-language-html5" },
      { label: "CSS", icon: "mdi-language-css3" },
      { label: "JavaScript", icon: "mdi-language-javascript" },
    ],
    highlights: [
      "Developed a dynamic restaurant review system with ratings, comments, and photos.",
      "Used Handlebars for templating, ensuring fast rendering and maintainable views.",
      "Built the backend using Node.js to handle user authentication and data storage.",
      "Focused on responsive design for desktop and mobile platforms.",
    ],
    links: [
      {
        title: "GitHub Repo",
        href: "https://github.com/anaj00/CCAPDEV-Tastee",
        icon: "mdi-github",
      },
      {
        title: "Live Demo",
        href: "https://tastee-47ty.onrender.com",
        icon: "mdi-open-in-new",
      },
    ],
  },
  {
    tag: "Software Development",
    title: "Distributed Fault-Tolerant Enrollment System",
    description: `
        A robust system for uninterrupted course registration, grade tracking, and administrative tasks, even during system failures. 
        Built with Vue.js, Vuetify, and MongoDB, ensuring high availability, fault tolerance, and seamless operation for students, faculty, and admins.
      `,
    longDescription: `
        This Enrollment System ensures uninterrupted course registration, grade tracking, and administrative tasks, even in the event of system failures. 
        The system is designed with high availability and fault tolerance at its core, employing advanced strategies to recover from node failures and 
        ensure that critical operations like course registration and grade management continue seamlessly. The platform features distinct interfaces 
        for students, faculty, and admins. Built using Vue.js, Vuetify, and MongoDB, this project showcases my ability to design robust, resilient web applications.
      `,
    image: "/img/dlsu-logo.png",
    tech: [
      { label: "Vue.js", icon: "mdi-vuejs" },
      { label: "Vuetify", icon: "mdi-vuetify" },
      { label: "MongoDB", icon: "mdi-database" },
      { label: "Distributed Systems", icon: "mdi-lan-connect" },
    ],
    highlights: [
      "Fault tolerance mechanisms integrated to handle system disruptions without impacting core functionality, ensuring continuous operation during node failures.",
      "Student-facing interface for course enrollment, grade checking, and account management, with automatic failover to ensure data integrity.",
      "Faculty-facing and admin-facing interfaces designed to manage student records, grades, and courses with data consistency even in case of failures.",
      "Built with Vue.js for dynamic, real-time updates and Vuetify for a responsive, user-friendly interface.",
      "Leveraged MongoDB for reliable, scalable data storage and efficient error recovery.",
    ],
    links: [
      {
        title: "GitHub Repo",
        href: "https://github.com/Dwigoric/stdiscm-probset-4",
        icon: "mdi-github",
      },
    ],
  },
  {
    tag: "Software Development",
    title: "Distributed Patient Appointment Database System",
    description: `
      Developed a distributed database system for managing patient appointments across multiple MySQL servers, ensuring high availability and fault tolerance. 
      The system allows for real-time updates and provides a web-based interface for managing patient appointment data.
    `,
    longDescription: `
      This project involved the creation of a multi-node distributed database system designed to manage patient appointment data using three interconnected MySQL servers. 
      I developed a web-based interface for appointment management and automated data import from CSV files using Python. The system incorporates data replication, fault tolerance, and recovery mechanisms, ensuring data consistency and high availability. This project emphasizes the importance of maintaining operational continuity in healthcare systems through robust distributed architectures.
    `,
    image: "/img/dlsu-logo.png", // Update with correct image path if needed
    tech: [
      { label: "MySQL", icon: "mdi-database" },
      { label: "HTML/CSS", icon: "mdi-language-html5" },
      { label: "JavaScript", icon: "mdi-language-javascript" },
    ],
    highlights: [
      "Built a web interface for viewing, adding, and managing patient appointments.",
      "Developed Python scripts for importing patient data from CSV files into MySQL.",
      "Implemented data replication and fault-tolerant recovery across three interconnected MySQL servers.",
      "Ensured real-time updates and accessibility through a lightweight frontend.",
    ],
    links: [
      {
        title: "GitHub Repo",
        href: "https://github.com/anaj00/STADVDB-MC02-WebApp",
        icon: "mdi-github",
      },
    ],
  },
  {
    tag: "Software Development",
    title: "MyFarm",
    description: `
        Developed a farming simulation game that allows players to manage a virtual farm, plant crops, and manage resources. This Java-based project enhanced my understanding of object-oriented programming and game logic.
      `,
    longDescription: `
      MyFarm is a farming simulation game where players can manage a virtual farm, including planting crops, harvesting, and resource management. The game was developed using Java, leveraging object-oriented programming principles like inheritance, polymorphism, and encapsulation. I implemented various game mechanics to make the experience interactive and engaging. Additionally, I developed a user-friendly interface and focused on saving and loading game progress to ensure seamless gameplay.
    `,
    image: "/img/dlsu-logo.png", // Update with correct image path if needed
    tech: [
      { label: "Java", icon: "mdi-language-java" },
      { label: "Object-Oriented Programming", icon: "mdi-cogs" },
    ],
    highlights: [
      "Created game mechanics for planting, harvesting, and resource management.",
      "Utilized object-oriented programming principles (inheritance, polymorphism, encapsulation).",
      "Developed a user-friendly interface for interaction with the game world.",
      "Implemented game state management for saving and loading player progress.",
    ],
    links: [
      {
        title: "GitHub Repo",
        href: "https://github.com/anaj00/CCPROG3-myFarm",
        icon: "mdi-github",
      },
    ],
  },
];
