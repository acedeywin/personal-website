"use strict";

eventsApp.controller('maincontroller', 
    function maincontroller($scope){

        //Home Page
        $scope.event = {
            fullname: 'Okpalaononuju Stephen Ifeamarame',
            subname: 'Nigerian | Designer | Developer | True Africa Believer',
            logoImgUrl: '/img/others/web-logo.png',
            nigerianFlag: '/img/others/naija.gif',
            rastaFlag: '/img/others/rasta.png',
        };

        $scope.date = new Date();

        $scope.navBar = [
            {
                title: 'Home',
                link: '#homepage',
                class: 'navigation__link link user-acct'
            },
            {
                title: 'About',
                link: '#about',
                class: 'navigation__link link user-acct'
            },
            {
                title: 'Curriculum Vitae',
                link: 'http://acedeywin.github.io/my-cv',
                class: 'navigation__link link user-acct'
            },
            {
                title: 'Porfolio',
                link: '#portfolio',
                class: 'navigation__link link user-acct'
            },
            {
                title: 'Gallery',
                link: '#gallery',
                class: 'navigation__link link user-acct'
            },
            {
                title: 'Contact',
                link: '#contact',
                class: 'navigation__link link user-acct'
            }
        ];

        //Gallery Page
        $scope.galleryName = 'Picture Gallery';

        $scope.gallery = [
            {
                status: 'Before',
                position: 'move-in-left',
                column: 'col-1-of-2',
                mainClass: 'photo',
                pics1: '/img/yung/yung1.jpg',
                pics2: '/img/yung/yung2.jpg',
                pics3: '/img/yung/yung3.jpg',
                pics4: '/img/yung/yung4.jpg',
                pics5: '/img/yung/yung5.jpg',
                class1: 'photo__design photo__design--p3',
                class2: 'photo__design photo__design--p2',
                class3: 'photo__design photo__design--p4',
                class4: 'photo__design photo__design--p5',
                class5: 'photo__design photo__design--p6'
            },
            {
                status: 'After',
                position: 'move-in-right',
                column: 'col-1-of-2',
                mainClass: 'photo',
                pics1: '/img/old/old2.jpg',
                pics2: '/img/old/old3.jpg',
                pics3: '/img/old/old4.jpg',
                pics4: '/img/old/old5.jpg',
                pics5: '/img/old/old6.jpg',
                pics6: '/img/old/steve.jpg',
                class1: 'photo__design photo__design--p3',
                class2: 'photo__design photo__design--p2',
                class3: 'photo__design photo__design--p4',
                class4: 'photo__design photo__design--p5',
                class5: 'photo__design photo__design--p6',
                class6: 'photo__design photo__design--p7'
            }
        ];

        //About Page
        $scope.about = {
            name: 'About',

            profile1: 'Stephen holds a Bachelor of Science degree in Psychology from Nnamdi Azikiwe University, Awka and a Masters degree in Development Studies from Federal University, Dustin-ma, with two years of work experience as a Research Assistant where he supported research, project planning & implementation, monitoring & evaluation, office administration, logistics, and coordinated with multiple stakeholders to meet project/grant objectives. Before his engagement with the Institute, he was involved in Training/Research & Development in a technology firm where he brought innovative ideas and researched on contemporary technologies that helped develop the organization. He is also into app design & development where he hopes to positively enhance people’s experience online and make the web a better place.',

            profile2: 'Stephen is gifted in being analytical, investigative and questioning. He loves to analyze and investigate, exploring data and information. He can quickly identify the key points, even in the most complex scenarios, offer others insight and clarity, and uses his strength to simplify and solve complex problems. Stephen is also gifted in being driven, determined and ambitious. He is a driven individual with limitless motivation, always focused on achieving his goals, and consistently delivers great work, regardless of the pressure.',

            profile3: 'Stephen has keen interests in Human-Computer interactions, Software Development, Behavioral Research, and Program/Project management. He also likes to read, exercise, listen to good music, watch football (soccer), and surf the Internet. And of course, he is a Madridista  and a foodie!',  
        };

        //Details for Portfolio Page
        $scope.portfolioName = 'Portfolio';

        $scope.firstRow = [
            {
                header:'Banka Banking App',
                tech1: 'HTMLS5 | CSS3',
                tech2: 'JavaScript | JQuery',
                tech3: 'NodeJS | ExpressJS', 
                tech4: 'PostgreSQL',
                picture: '/img/portfolio/banka.jpg',
                note: 'Banka is a light-weight core banking application that powers banking operations like account creation, customer deposit and withdrawals.',
                ui: 'https://acedeywin.github.io/Banka-project',
                repo: 'https://github.com/acedeywin/Banka-project'
            },
            {
                header:'Personal Website',
                tech1: 'HTMLS5 | CSS3',
                tech2: 'JavaScript',
                tech3: 'NodeJS | ExpressJS', 
                tech4: 'AngularJS | SASS',
                picture: '/img/portfolio/new-website.jpg',
                note: 'Well, you are already here. Just make sure you navigate the site enough time to allow you view all the awesome stuff that I have done. Enjoy!',
                ui: ' https://salty-refuge-65598.herokuapp.com/',
                repo: 'https://github.com/acedeywin/personal-website'
            },
            {
                header:'Todo-list App',
                tech1: 'HTMLS5 | CSS3',
                tech2: 'JavaScript',
                tech3: 'NodeJS | ExpressJS', 
                tech4: 'MongoDB',
                picture: '/img/portfolio/todo.jpg',
                note: 'Todo-list helps you balance and manage your daily task. Users can add and delete tasks as much as they want.',
                ui: 'https://hidden-brushlands-92586.herokuapp.com/todo',
                repo: 'https://github.com/acedeywin/todo-app'
            }
        ];

        $scope.secondRow = [
            {
                header:'Armstrong Number Checker',
                tech1: 'HTMLS5',
                tech2: 'CSS3',
                tech3: 'JavaScript', 
                tech4: '',
                picture: '/img/portfolio/armstrong.jpg',
                note: 'An Armstrong number of 3 digits is an integer that the sum of the cubes of its digits is equal to the number.',
                ui: 'https://acedeywin.github.io/Armstrong-number-checker/',
                repo: 'https://github.com/acedeywin/Armstrong-number-checker'
            },         
            {
                header:'Currency Converter',
                tech1: 'HTMLS5',
                tech2: 'CSS3',
                tech3: 'JavaScript', 
                tech4: '',
                picture: '/img/portfolio/gandollarz.jpg',
                note: 'Currency Conversion App (Gandollar) is an app that converts different currencies to their Nigerian Naira equivalent. It utilizes the free currency converter developed and maintained by Manny.',
                ui: 'https://acedeywin.github.io/gandollarz/',
                repo: 'https://github.com/acedeywin/gandollarz'
            },
            {
                header:'BMI Calculator',
                tech1: 'HTMLS5',
                tech2: 'CSS3',
                tech3: 'JavaScript', 
                tech4: '',
                picture: '/img/portfolio/bmi.jpg',
                note: 'The BMI calculator calculates your body mass index using your mass (weight) and height. The BMI is defined as the body mass divided by the square of the body height.',
                ui: 'https://acedeywin.github.io/bmi-calculator/',
                repo: 'https://github.com/acedeywin/bmi-calculator'
            }
        ];

        $scope.thirdRow = [
            {
                header:'Macauley Institute Web Prototype',
                tech1: 'HTMLS5',
                tech2: 'CSS3',
                tech3: 'JavaScript', 
                tech4: 'Bootstrap4',
                picture: '/img/portfolio/macinstitute.jpg',
                note: 'This was the first prototype website developed for the Macauley Institute for Research, a former employer of mine where I worked as a Research Assistant and doubled as a Webmaster.',
                ui: 'https://acedeywin.github.io/themacinstitute/',
                repo: 'https://github.com/acedeywin/themacinstitute'
            },         
            {
                header:'Shortest Path Game',
                tech1: 'HTMLS5',
                tech2: 'CSS3',
                tech3: 'JavaScript', 
                tech4: '',
                picture: '/img/portfolio/sp-home.jpg',
                note: 'Shortest path game shows the shortest path to Matt’s house. The world is given to you as a comma-delimited string which represents the cells in the world from top-left to bottom-right.',
                ui: 'https://acedeywin.github.io/shortest-path-game/',
                repo: 'https://github.com/acedeywin/shortest-path-game'
            },
            {
                header:'WebGL Technical Documentation',
                tech1: 'HTMLS5',
                tech2: 'CSS3',
                tech3: 'Rookie Skill', 
                picture: '/img/portfolio/td-page.jpg',
                note: 'This webpage is a technical documentation for Web Graphics Library (WebGL) and was adopted from Mozilla Developers Network (MDN) website.',
                ui: 'https://acedeywin.github.io/td-page/',
                repo: 'https://github.com/acedeywin/td-page'
            }
        ];

        $scope.footer = [
            {
                link: 'https://www.facebook.com/stephen.okpala.04',
                class: 'fa fa-facebook-official'
            },
            {
                link: 'https://www.instagram.com/acedeywin',
                class: 'fa fa-instagram'
            },
            {
                link: 'https://www.github.com/acedeywin',
                class: 'fa fa-github'
            },
            {
                link: 'https://www.twitter.com/acedeywinn',
                class: 'fa fa-twitter'
            },
            {
                link: 'https://www.linkedin.com/in/stevon04',
                class: 'fa fa-linkedin'
            }
        ];
    }    
);


