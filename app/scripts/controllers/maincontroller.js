"use strict"

eventsApp.controller("maincontroller", function maincontroller($scope) {
  //Home Page
  $scope.event = {
    fullname: "Okpalaononuju Stephen Ifeamarame",
    subname: "Nigerian | Designer | Developer | True Africa Believer",
    logoImgUrl: "/img/others/web-logo.png",
    miniLogo: "/img/others/favicon.png",
    nigerianFlag: "/img/others/naija.gif",
    rastaFlag: "/img/others/rasta.png",
  }

  $scope.date = new Date()

  $scope.navBar = [
    {
      title: "Home",
      link: "homepage",
      class: "navigation__link link user-acct",
    },
    {
      title: "About",
      link: "about",
      class: "navigation__link link user-acct",
    },
    {
      title: "Curriculum Vitae",
      link: "http://acedeywin.github.io/my-cv",
      class: "navigation__link link user-acct",
      target: "blank",
    },
    {
      title: "Porfolio",
      link: "portfolio",
      class: "navigation__link link user-acct",
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
      "Stephen holds a bachelor of science degree in psychology from Nnamdi Azikiwe University, Awka and a masters degree in development studies from Federal University Dustin-ma, with three years of work experience in app design & development where he hopes to positively enhance people’s experience online and make the web a better place. He also has two years experience as a research assistant where he supported research, project planning & implementation, monitoring & evaluation, office administration, logistics, and coordinated with multiple stakeholders to meet project/grant objectives. Before his engagement with the Institute, he was involved in training/research & development in a technology firm where he brought innovative ideas and researched on contemporary technologies that helped develop the organization.",

    profile2:
      "Stephen is gifted in being analytical, investigative and questioning. He loves to analyze and investigate, exploring data and information. He can quickly identify the key points, even in the most complex scenarios, offer others insight and clarity, and uses his strength to simplify and solve complex problems. Stephen is also gifted in being driven, determined and ambitious. He is a driven individual with limitless motivation, always focused on achieving his goals, and consistently delivers great work, regardless of the pressure.",

    profile3:
      "Stephen has keen interests in Human-Computer interactions, Software Development, Behavioral Research, and Program/Project management. He also likes to read, exercise, listen to good music, watch football (soccer), and surf the Internet. And of course, he is a Madridista  and a foodie!",
  }

  //Details for Portfolio Page
  $scope.portfolioName = "Portfolio"

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
      ui: "https://github.com/acedeywin/reddit-clone-client#how-to-use",
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
      ui: "https://stephen-okpala.herokuapp.com/",
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
    {
      link: "https://www.facebook.com/stephen.okpala.04",
      class: "fa fa-facebook-official",
    },
    {
      link: "https://www.instagram.com/acedeywin",
      class: "fa fa-instagram",
    },
    {
      link: "https://www.github.com/acedeywin",
      class: "fa fa-github",
    },
    {
      link: "https://www.twitter.com/acedeywinn",
      class: "fa fa-twitter",
    },
    {
      link: "https://www.linkedin.com/in/stevon04",
      class: "fa fa-linkedin",
    },
  ]
})
