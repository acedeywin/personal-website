"use strict"

eventsApp.controller("maincontroller", function maincontroller($scope) {
  //Home Page
  $scope.event = {
    fullname: "Okpalaononuju Stephen Ifeamarame",
    subname: "SOFTWARE DEVELOPER | IT PROFESSIONAL | TECH WRITER",
    logoImgUrl: "/img/others/web-logo.png",
    miniLogo: "/img/others/favicon.png",
    nigerianFlag: "/img/others/naija.gif",
    rastaFlag: "/img/others/rasta.png",
  }

  $scope.date = new Date()

  $scope.navBar = [
    {
      title: "Home",
      link: "/homepage",
      class: "navigation__link link user-acct",
    },
    {
      title: "About",
      link: "about",
      class: "navigation__link link user-acct",
    },
    {
      title: "Porfolio",
      link: "portfolio",
      class: "navigation__link link user-acct",
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1eHhp_pIWsY6RnMzTHQfYUcgqGDmvkPmY/view?usp=drive_link",
      class: "navigation__link link user-acct",
      target: "blank",
    },
    {
      title: "Medium",
      link: "https://acedeywin.medium.com/",
      class: "navigation__link link user-acct",
      target: "blank",
    },
    {
      title: "GitHub",
      link: "https://github.com/acedeywin",
      class: "navigation__link link user-acct",
      target: "blank",
    },
    {
      title: "Contact Me",
      link: "mailto:stephenokpala@gmail.com",
      class: "navigation__link link user-acct",
    },
  ]

  //Gallery Page
  $scope.galleryName = "Picture Gallery"

  $scope.gallery = [
    {
      status: "",
      position: "move-in-left",
      column: "col-1-of-2",
      mainClass: "photo",
      pics1: "/img/yung/yung1.jpg",
      pics2: "/img/yung/yung2.jpg",
      pics3: "/img/yung/yung3.jpg",
      pics4: "/img/yung/yung4.jpg",
      pics5: "/img/yung/yung5.jpg",
      class1: "photo__design photo__design--p3",
      class2: "photo__design photo__design--p2",
      class3: "photo__design photo__design--p4",
      class4: "photo__design photo__design--p5",
      class5: "photo__design photo__design--p6",
    },
    {
      status: "",
      position: "move-in-right",
      column: "col-1-of-2",
      mainClass: "photo",
      pics1: "/img/old/old2.jpg",
      pics2: "/img/old/old3.jpg",
      pics3: "/img/old/old4.jpg",
      pics4: "/img/old/old5.jpg",
      pics5: "/img/old/old6.jpg",
      pics6: "/img/old/steve.jpg",
      class1: "photo__design photo__design--p3",
      class2: "photo__design photo__design--p2",
      class3: "photo__design photo__design--p4",
      class4: "photo__design photo__design--p5",
      class5: "photo__design photo__design--p6",
      class6: "photo__design photo__design--p7",
    },
  ]

  //About Page
  $scope.about = {
    name: "About",

    profile1:
      "With over five years of hands-on development experience building SaaS products, I specialize in creating robust applications using React and Node.js. My recent work includes designing a modern, open-source contact centre platform for crisis helplines. With solid skills in JavaScript/TypeScript and databases like PostgreSQL, MySQL, and MongoDB, I am adept at working in diverse global teams. I am excited about contributing my expertise to a dynamic company, helping drive innovation and success with a collaborative and results-oriented approach.",

    profile2:
      "I have worked extensively in software consulting, where I collaborated to build apps ranging from enterprise expense management software to e-commerce web apps, fintech applications, restaurant booking and rating software, etc. I also have experience in the Nonprofit space, where I worked on an open-source contact centre platform based on Twilio's Flex technology that unifies the communications work of crisis response helplines.",

    profile3:
      "I have keen interests in Human-Computer Interaction, Tech for Good, Blockchain Technology, and Artificial Intelligence. I am a Madridista. I like food and trying out different delicacies. Recently, I have become more of a gym and fitness believer. I strongly believe that working your body helps keep your mind strong.",
  }

  //Details for Portfolio Page
  $scope.portfolioName = "Portfolio"

  $scope.firstNewRow = [
    {
      header: "Alpha Vantage Stock",
      tech1: "React | Redux | Tailwind CSS",
      tech2: "TypeScript",
      tech3: "Alpha Vantage Stock API",
      tech4: "NodeJS",
      picture: "/img/portfolio/alpha-vantage-stock.png",
      note:
        "A React App that where users can search for a stock based on different time series.",
      ui: "https://alpha-vantage-stock-data.netlify.app",
      repo: "https://github.com/acedeywin/alpha-vantage-stock",
    },
    {
      header: "AI Text Analysis",
      tech1: "Next.js | Redux | Tailwind CSS",
      tech2: "TypScript | Python",
      tech3: "LLM | Llama 3.1 | Groq",
      tech4: "NodeJS | FastAPI | Docker",
      picture: "/img/portfolio/project-gutenberg.png",
      note:
        "A web application that allow users to explore and analyze books from Project Gutenberg.",
      ui: "https://project-gutenberg-api-j6r9.vercel.app/",
      repo: "https://github.com/acedeywin/project-gutenberg-client",
      repo2: "https://github.com/acedeywin/project-gutenberg-api",
    },
    {
      header: "Demo Credit API",
      tech1: "TypeScript",
      tech2: "Lendsqr Adjutor API",
      tech3: "MySQL | Knex.js",
      tech4: "NodeJS | Jest | Docker",
      picture: "/img/portfolio/demo-credit.png",
      note:
        "A backend API for managing user accounts and transactions for a lending platform.",
      repo2: "https://github.com/acedeywin/demo-credit-api",
    },
  ]

  $scope.firstRow = [
    {
      header: "RedditClone",
      tech1: "React | NextJs | Chakra-UI",
      tech2: "Urql Client | TypeOrm | JavaScript",
      tech3: "GraphQL | TypeGrapQL | TypeScript",
      tech4: "NodeJS | Postgresql | Redis",
      picture: "/img/portfolio/reddit.jpg",
      note:
        "RedditClone app allows authenticated users to add, edit, vote, and delete posts. The code was written mainly using TypeScript",
      ui: "https://warm-lowlands-62419.herokuapp.com",
      repo: "https://github.com/acedeywin/reddit-clone-server",
    },
    {
      header: "Ristorante Con Fusion",
      tech1: "HTMLS5 | CSS3",
      tech2: "JavaScript | Bootstrap 4",
      tech3: "React | Redux",
      tech4: "NodeJS | MongoDB",
      picture: "/img/portfolio/confusion.jpg",
      note:
        "Ristorante Con Fusion is a full-stack web development specialization project with React that teaches complete web and hybrid mobile solutions. The course covers topics on Bootstrap 4, React, React Native, NodeJS, etc.",
      ui: "https://sheltered-brook-19690.herokuapp.com/",
      repo: "https://github.com/acedeywin/confusion",
    },
    {
      header: "Hackernews Clone",
      tech1: "TypeScript",
      tech2: "JavaScript | React",
      tech3: "Apollo Client | Prisma",
      tech4: "NodeJS | Graphql",
      picture: "/img/portfolio/hackernews.jpg",
      note:
        "This is a clone of Hackernews where users can get authenticated, create new links, upvote links, and see realtime updates from other users.",
      ui: "https://affectionate-bell-bbcebd.netlify.app",
      repo: "https://github.com/acedeywin/hackernews-clone",
    },
  ]

  $scope.secondRow = [
    {
      header: "Pizza App",
      tech1: "HTML | CSS3",
      tech2: "PHP",
      tech3: "Matrializecss",
      tech4: "MySQL",
      picture: "/img/portfolio/pizza.jpg",
      note:
        "Pizza app is a CRUD app that supports features such as adding a pizza menu, viewing individual menu details, and deleting a menu from the database.",
      ui: "http://acepizza.000webhostapp.com",
      repo: "https://github.com/acedeywin/pizza-app",
    },
    {
      header: "Pix Selector",
      tech1: "HTMLS5 | CSS3",
      tech2: "JavaScript | React",
      tech3: "Bootstrap 4 | Tailwind",
      tech4: "NodeJS",
      picture: "/img/portfolio/random.jpg",
      note:
        "Pix Selector randomly select pictures from an API and display the data individually.",
      ui: "https://4ltlj.csb.app/",
      repo: "https://github.com/acedeywin/react-app",
    },
    {
      header: "Banka Banking App",
      tech1: "HTMLS5 | CSS3",
      tech2: "JavaScript | JQuery",
      tech3: "NodeJS | ExpressJS",
      tech4: "PostgreSQL",
      picture: "/img/portfolio/banka.jpg",
      note:
        "Banka is a light-weight core banking application that powers banking operations like account creation, customer deposit and withdrawals.",
      ui: "https://acedeywin.github.io/Banka-project",
      repo: "https://github.com/acedeywin/Banka-project",
    },
  ]

  $scope.thirdRow = [
    {
      header: "Personal Website",
      tech1: "HTMLS5 | CSS3",
      tech2: "JavaScript",
      tech3: "NodeJS | ExpressJS",
      tech4: "AngularJS | SASS",
      picture: "/img/portfolio/new-website.jpg",
      note:
        "Well, you are already here. Just make sure you navigate the site enough time to allow you view all the awesome stuff that I have done. Enjoy!",
      ui: "https://stephen-okpala-77334370365.us-central1.run.app/",
      repo: "https://github.com/acedeywin/personal-website",
    },
    {
      header: "Armstrong Number Checker",
      tech1: "HTMLS5",
      tech2: "CSS3",
      tech3: "JavaScript",
      tech4: "",
      picture: "/img/portfolio/armstrong.jpg",
      note:
        "An Armstrong number of 3 digits is an integer that the sum of the cubes of its digits is equal to the number.",
      ui: "https://acedeywin.github.io/Armstrong-number-checker/",
      repo: "https://github.com/acedeywin/Armstrong-number-checker",
    },
    {
      header: "Currency Converter",
      tech1: "HTMLS5",
      tech2: "CSS3",
      tech3: "JavaScript",
      tech4: "",
      picture: "/img/portfolio/gandollarz.jpg",
      note:
        "Currency Conversion App (Gandollar) is an app that converts different currencies to their Nigerian Naira equivalent. It utilizes the free currency converter developed and maintained by Manny.",
      ui: "https://acedeywin.github.io/gandollarz/",
      repo: "https://github.com/acedeywin/gandollarz",
    },
  ]

  $scope.fourthRow = [
    {
      header: "Shortest Path Game",
      tech1: "HTMLS5",
      tech2: "CSS3",
      tech3: "JavaScript",
      tech4: "",
      picture: "/img/portfolio/sp-home.jpg",
      note:
        "Shortest path game shows the shortest path to Matt’s house. The world is given to you as a comma-delimited string which represents the cells in the world from top-left to bottom-right.",
      ui: "https://acedeywin.github.io/shortest-path-game/",
      repo: "https://github.com/acedeywin/shortest-path-game",
    },
    {
      header: "BMI Calculator",
      tech1: "HTMLS5",
      tech2: "CSS3",
      tech3: "JavaScript",
      tech4: "",
      picture: "/img/portfolio/bmi.jpg",
      note:
        "The BMI calculator calculates your body mass index using your mass (weight) and height. The BMI is defined as the body mass divided by the square of the body height.",
      ui: "https://acedeywin.github.io/bmi-calculator/",
      repo: "https://github.com/acedeywin/bmi-calculator",
    },
    {
      header: "WebGL Technical Documentation",
      tech1: "HTMLS5",
      tech2: "CSS3",
      tech3: "Rookie Skill",
      picture: "/img/portfolio/td-page.jpg",
      note:
        "This webpage is a technical documentation for Web Graphics Library (WebGL) and was adopted from Mozilla Developers Network (MDN) website.",
      ui: "https://acedeywin.github.io/td-page/",
      repo: "https://github.com/acedeywin/td-page",
    },
  ]

  $scope.footer = [
    // {
    //   link: "https://www.facebook.com/stephen.okpala.04",
    //   class: "fa fa-facebook-official",
    // },
    // {
    //   link: "https://www.instagram.com/acedeywin",
    //   class: "fa fa-instagram",
    // },
    {
      link: "https://www.github.com/acedeywin",
      class: "fa fa-github",
    },
    // {
    //   link: "https://www.twitter.com/acedeywinn",
    //   class: "fa fa-twitter",
    // },
    {
      link: "https://www.linkedin.com/in/acedeywin",
      class: "fa fa-linkedin",
    },
  ]
})
