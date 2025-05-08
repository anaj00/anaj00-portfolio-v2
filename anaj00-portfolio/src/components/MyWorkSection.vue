<template>
  <v-container>
    <h2 class="text-h3 mb-6">My Work</h2>

    <v-row>
      <v-col cols="12" md="6" v-for="(card, i) in cards" :key="i">
        <WorkCard :title="card.title" :description="card.description" :long-description="card.longDescription" :highlights="card.highlights"
          :image="card.image" :tech="card.tech" :links="card.links" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import WorkCard from '@/components/WorkCard.vue'

  const cards = [
    {
      title: 'Corallian: Coral Segmentation and Classification using Deep Learning (Undergraduate Thesis)',
      description: 'Developing a deep learning pipeline to segment and classify coral species from underwater imagery.',
      longDescription: `My thesis focuses on developing a deep learning pipeline to segment and classify coral species from underwater imagery. The system is divided into two core components: a segmentation model for identifying coral regions, and a classification model to label those regions with their corresponding species (TAU labels). The project addresses data imbalance challenges and integrates advanced techniques such as ASPP, ResNet with HDC, and visual embeddings.`,
      highlights: [
        'Implemented a segmentation pipeline using a ResNet+ASPP+DUC architecture.',
        'Built a classification pipeline leveraging high-dimensional convolution (HDC) and softmax-based species prediction.',
        'Trained on a curated dataset from the SHORE program (2024 subset), handling class imbalance and data preprocessing.',
        'Utilized PyTorch for model development and Slurm for distributed training on P40 GPU nodes.',
        'Improved model accuracy by optimizing input scaling, up/downsampling strategies, and feature embedding.'
      ],
      image: 'https://example.com/coral-image.jpg',
      tech: [
        { label: 'Deep Learning', icon: 'mdi-brain' },
        { label: 'Image Segmentation', icon: 'mdi-image' },
        { label: 'PyTorch', icon: 'mdi-pytorch' },
        { label: 'ResNet', icon: 'mdi-cogs' },
        { label: 'Slurm', icon: 'mdi-server' }
      ],
      links: [
        {
          title: 'GitHub',
          icon: 'mdi-github',
          href: 'https://github.com/Corallian-Coral-yan'
        },
      ]
    },
    {
      title: 'Distributed Fault-Tolerant Enrollment System',
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
      image: '/img/dlsu-logo.png',
      tech: [
        { label: 'Vue.js', icon: 'mdi-vuejs' },
        { label: 'Vuetify', icon: 'mdi-vuetify' },
        { label: 'MongoDB', icon: 'mdi-database' },
        { label: 'Distributed Systems', icon: 'mdi-lan-connect' }
      ],
      highlights: [
        'Fault tolerance mechanisms integrated to handle system disruptions without impacting core functionality, ensuring continuous operation during node failures.',
        'Student-facing interface for course enrollment, grade checking, and account management, with automatic failover to ensure data integrity.',
        'Faculty-facing and admin-facing interfaces designed to manage student records, grades, and courses with data consistency even in case of failures.',
        'Built with Vue.js for dynamic, real-time updates and Vuetify for a responsive, user-friendly interface.',
        'Leveraged MongoDB for reliable, scalable data storage and efficient error recovery.'
      ],
      links: [
        { title: 'GitHub Repo', href: 'https://github.com/yourprojectrepo', icon: 'mdi-github' },
        { title: 'Live Demo', href: 'https://yourprojectdemo.com', icon: 'mdi-open-in-new' }
      ]
    },
    {
      title: 'FurMate: Android Pet Health Management App',
      description: `
        FurMate is an Android app that helps pet owners manage their pet’s health records, vaccination history, and documents in one place. 
        Built with Android Studio and Firebase, it offers real-time syncing, offline accessibility, and a seamless user experience.
      `,
      longDescription: `
        FurMate is an Android application designed to help pet owners conveniently manage their pet’s health records, vaccination history, and documents—all in one place. 
        Developed using Android Studio with Firebase as the backend, FurMate features real-time syncing and offline accessibility, ensuring users have access to vital pet data even without internet connectivity. 
        I served as the frontend developer, focusing on building an intuitive and responsive user interface that delivers a seamless user experience.
      `,
      image: '/img/dlsu-logo.png', // Update with correct image path if needed
      tech: [
        { label: 'Android Studio', icon: 'mdi-android' },
        { label: 'Firebase', icon: 'mdi-fire' },
        { label: 'Material Design', icon: 'mdi-android-debug-bridge' }
      ],
      highlights: [
        'Designed and implemented the mobile frontend using Material Design components and XML layouts.',
        'Integrated Firebase services for authentication, real-time database, and cloud storage.',
        'Developed an offline-first experience, syncing local data with the cloud when internet is available.',
        'Created UI flows for managing pet profiles, medical history, and appointment tracking.'
      ],
      links: [
        { title: 'GitHub Repo', href: 'https://github.com/yourprojectrepo', icon: 'mdi-github' },
      ]
    },
    {
      title: 'Process Multiplexer & CLI Emulation',
      description: `
        A C++ project that emulates a process multiplexer and custom command-line interface (CLI) to simulate operating system behavior 
        for handling multiple concurrent processes. Focused on multi-threading and concurrency management, this project helps deepen system-level programming skills.
      `,
      longDescription: `
        This project emulates a process multiplexer and a custom command-line interface (CLI) using C++. 
        It simulates basic operating system behavior for handling multiple processes concurrently. 
        A major focus was on implementing multi-threading and managing concurrency to emulate realistic process scheduling and execution.
        Key challenges included handling race conditions, synchronization, and using mutexes and condition variables to manage multi-threaded processes.
        This project strengthened my understanding of system-level programming and concurrent execution models.
      `,
      image: '/img/dlsu-logo.png', // Update with correct image path if needed
      tech: [
        { label: 'C++', icon: 'mdi-language-cpp' },
        { label: 'Multithreading', icon: 'mdi-code-braces' },
        { label: 'CLI', icon: 'mdi-terminal' }
      ],
      highlights: [
        'Built a process multiplexer capable of handling concurrent tasks.',
        'Designed and implemented a custom CLI for user interaction and process control.',
        'Utilized C++ threading to simulate parallel process execution.',
        'Handled concurrency challenges such as race conditions and synchronization using mutexes and condition variables.',
        'Strengthened understanding of system-level programming and concurrent execution models.'
      ],
      links: [
        { title: 'GitHub Repo', href: 'https://github.com/yourprojectrepo', icon: 'mdi-github' }
      ]
    },
    {
      title: 'Binary-64 Floating Point Simulator',
      description: `
        Developed as part of a Computer Architecture course, this Binary-64 Floating Point Simulator allows users to input and convert between binary and decimal 
        based on IEEE 754 standards. The application visualizes the structure of 64-bit floating-point numbers, including the sign, exponent, and mantissa.
      `,
      longDescription: `
        This project, developed for the CSARCH2 (Computer Architecture) course, is a Binary-64 Floating Point Simulator built to convert and visualize binary and decimal inputs 
        based on the IEEE 754 standards. Using Vue.js and Vuetify, the frontend provides real-time interactive conversion and visualization of the floating-point number components 
        (sign, exponent, mantissa). It supports both binary-to-decimal and decimal-to-binary conversions and helps reinforce understanding of the IEEE 754 binary64 representation.
      `,
      image: '/img/dlsu-logo.png', // Update with correct image path if needed
      tech: [
        { label: 'Vue.js', icon: 'mdi-language-vue' },
        { label: 'Vuetify', icon: 'mdi-vuetify' },
        { label: 'JavaScript', icon: 'mdi-language-javascript' }
      ],
      highlights: [
        'Built an intuitive frontend interface with Vuetify for real-time input and visual conversion.',
        'Supported both binary-to-decimal and decimal-to-binary conversions.',
        'Provided a detailed breakdown of floating-point components: sign, exponent, and mantissa.',
        'Reinforced understanding of IEEE 754 binary64 representation.'
      ],
      links: [
        { title: 'GitHub Repo', href: 'https://github.com/yourprojectrepo', icon: 'mdi-github' }
      ]
    },
    {
      title: 'Distributed Patient Appointment Database System',
      description: `
      Developed a distributed database system for managing patient appointments across multiple MySQL servers, ensuring high availability and fault tolerance. 
      The system allows for real-time updates and provides a web-based interface for managing patient appointment data.
    `,
      longDescription: `
      This project involved the creation of a multi-node distributed database system designed to manage patient appointment data using three interconnected MySQL servers. 
      I developed a web-based interface for appointment management and automated data import from CSV files using Python. The system incorporates data replication, fault tolerance, and recovery mechanisms, ensuring data consistency and high availability. This project emphasizes the importance of maintaining operational continuity in healthcare systems through robust distributed architectures.
    `,
      image: '/img/dlsu-logo.png', // Update with correct image path if needed
      tech: [
        { label: 'MySQL', icon: 'mdi-database' },
        { label: 'Python', icon: 'mdi-language-python' },
        { label: 'HTML/CSS', icon: 'mdi-language-html5' },
        { label: 'JavaScript', icon: 'mdi-language-javascript' }
      ],
      highlights: [
        'Built a web interface for viewing, adding, and managing patient appointments.',
        'Developed Python scripts for importing patient data from CSV files into MySQL.',
        'Implemented data replication and fault-tolerant recovery across three interconnected MySQL servers.',
        'Ensured real-time updates and accessibility through a lightweight frontend.'
      ],
      links: [
        { title: 'GitHub Repo', href: 'https://github.com/yourprojectrepo', icon: 'mdi-github' }
      ]
    },
    {
      title: 'PetterCare: Pet Health & Wellness Web Platform',
      description: `
        PetterCare is a web platform designed for pet owners to manage their pets' health records, track wellness, and access expert advice. 
        As Product Owner and Frontend Web Designer, I led the design and implementation of a responsive, user-centric interface using React, TypeScript, and Tailwind CSS.
      `,
      longDescription: `
        PetterCare is an innovative web platform aimed at improving pet care by offering a centralized hub for pet owners to manage their pets' health records, set reminders, and seek expert advice. As the Product Owner, I was responsible for setting the vision, prioritizing features, and coordinating the team. On the frontend, I focused on designing an intuitive, mobile-friendly interface with React and TypeScript, ensuring code scalability, type safety, and a clean user experience. Tailwind CSS was used to implement the platform's responsive design.
      `,
      image: '/img/dlsu-logo.png', // Update with correct image path if needed
      tech: [
        { label: 'React.js', icon: 'mdi-react' },
        { label: 'TypeScript', icon: 'mdi-language-typescript' },
        { label: 'Tailwind CSS', icon: 'mdi-tailwind' }
      ],
      highlights: [
        'Led product planning, feature prioritization, and team coordination as Product Owner.',
        'Designed and implemented a responsive, mobile-friendly UI using React + Tailwind CSS.',
        'Focused on clean UI/UX for health tracking, reminders, and informational content.',
        'Ensured scalability and type safety with TypeScript integration.',
        'Made user-centric design decisions based on feedback and research.'
      ],
      links: [
        { title: 'GitHub Repo', href: 'https://github.com/yourprojectrepo', icon: 'mdi-github' }
      ]
    },
    {
      title: 'Loan Management System for Luzon-Based Cooperative (NGO Client)',
      description: `
        Developed a custom loan management system for an NGO cooperative in Luzon, focusing on streamlining loan applications, member records, and repayment tracking. 
        As the web designer, I created responsive and user-friendly interfaces using Vue.js and Vuetify while collaborating with the client and following Agile Scrum methodology.
      `,
      longDescription: `
        This project involved the development of a loan management system for a Luzon-based cooperative, designed to facilitate loan applications, member record management, and repayment tracking. I was the sole web designer, responsible for crafting an intuitive, responsive interface using Vue.js and Vuetify. The system was built in close collaboration with the client, ensuring it met their specific needs. The project followed Agile Scrum methodology, allowing for continuous feedback and iterative development to refine the system over time.
      `,
      image: '/img/dlsu-logo.png', // Update with correct image path if needed
      tech: [
        { label: 'Vue.js', icon: 'mdi-vuejs' },
        { label: 'Vuetify', icon: 'mdi-vuetify' },
        { label: 'HTML', icon: 'mdi-language-html5' },
        { label: 'CSS', icon: 'mdi-language-css3' },
        { label: 'JavaScript', icon: 'mdi-language-javascript' }
      ],
      highlights: [
        'Designed and implemented a responsive, user-friendly interface using Vue.js and Vuetify.',
        'Streamlined loan applications, member records, and repayment tracking functionalities.',
        'Collaborated closely with the NGO client to ensure the system met their needs.',
        'Followed Agile Scrum methodology for continuous feedback and iterative delivery.'
      ],
      links: [
        { title: 'GitHub Repo', href: 'https://github.com/yourprojectrepo', icon: 'mdi-github' }
      ]
    },
    {
      title: 'Tastee: Food Review Website for Metro Restaurants',
      description: `
        Developed a food review platform that enables users to rate and review restaurants across the Metro. Contributed to both frontend and backend development using Node.js and Handlebars for dynamic views, ensuring a smooth and responsive user experience.
      `,
      longDescription: `
        Tastee is a food review website designed to allow users to rate and review restaurants across the Metro. I played a key role in both the frontend and backend development, utilizing Node.js for the backend logic, user authentication, and data storage. Handlebars was used for templating, enabling the creation of dynamic views that rendered quickly and were easy to maintain. The platform allows users to submit ratings, comments, and photos, providing a rich and interactive experience. The website was designed with responsiveness in mind to ensure it functions seamlessly on both desktop and mobile devices.
      `,
      image: '/img/dlsu-logo.png', // Update with correct image path if needed
      tech: [
        { label: 'Node.js', icon: 'mdi-nodejs' },
        { label: 'Handlebars.js', icon: 'mdi-language-javascript' },
        { label: 'HTML', icon: 'mdi-language-html5' },
        { label: 'CSS', icon: 'mdi-language-css3' },
        { label: 'JavaScript', icon: 'mdi-language-javascript' }
      ],
      highlights: [
        'Developed a dynamic restaurant review system with ratings, comments, and photos.',
        'Used Handlebars for templating, ensuring fast rendering and maintainable views.',
        'Built the backend using Node.js to handle user authentication and data storage.',
        'Focused on responsive design for desktop and mobile platforms.'
      ],
      links: [
        { title: 'GitHub Repo', href: 'https://github.com/yourprojectrepo', icon: 'mdi-github' }
      ]
    },
    {
      title: 'MyFarm',
      description: `
        Developed a farming simulation game that allows players to manage a virtual farm, plant crops, and manage resources. This Java-based project enhanced my understanding of object-oriented programming and game logic.
      `,
      longDescription: `
      MyFarm is a farming simulation game where players can manage a virtual farm, including planting crops, harvesting, and resource management. The game was developed using Java, leveraging object-oriented programming principles like inheritance, polymorphism, and encapsulation. I implemented various game mechanics to make the experience interactive and engaging. Additionally, I developed a user-friendly interface and focused on saving and loading game progress to ensure seamless gameplay.
    `,
      image: '/img/dlsu-logo.png', // Update with correct image path if needed
      tech: [
        { label: 'Java', icon: 'mdi-language-java' },
        { label: 'Object-Oriented Programming', icon: 'mdi-cogs' }
      ],
      highlights: [
        'Created game mechanics for planting, harvesting, and resource management.',
        'Utilized object-oriented programming principles (inheritance, polymorphism, encapsulation).',
        'Developed a user-friendly interface for interaction with the game world.',
        'Implemented game state management for saving and loading player progress.'
      ],
      links: [
        { title: 'GitHub Repo', href: 'https://github.com/yourprojectrepo', icon: 'mdi-github' }
      ]
    }


  ];


</script>
