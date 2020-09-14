/* eslint-disable import/prefer-default-export */
import React from 'react';

export const landingText = {
  title: "Hi, I'm Atahan.",
  paragraph: 'I\'m a software developer, based in Istanbul.',
  button: 'Learn more about me!',
};

export const aboutText = {
  title: 'About me',
  paragraph: `I'm currently a junior computer engineering student at Koç
              University. My current focus is on web development but I
              also have interests on different fields. I consider myself
              as a curious and a creative person who likes to develop new
              skills. I enjoy using my creativity while working and also
              in my daily life. That's why I have a passion for cooking
              and music. I'm also a DJ at my school radio. My mindset is
              to be friendly and helpful as much as possible; hence, I
              love to work in teams and exchange knowledge with people.`,
};

export const skillsText = {
  title: 'My skills',
  technicalData: ['React.js', 'Flask', 'ASP.NET Core', 'AWS', 'Python', 'Java', 'Javascript', 'C#', 'HTML', 'CSS & SCSS', 'SQL'],
  sectoralData: ['Web Scraping', 'Graphic Design', 'UI & UX', 'Music Production'],
  softData: ['Marketing', 'Analytical Skills', 'Project Management', 'Teamwork', 'Leadership'],
  languageData: ['Turkish', 'English'],
};

export const experienceText = {

  title: 'Experience',
  data: [
    {
      company: 'Borda Technology',
      role: 'Software Engineer Intern',
      date: 'Jun 2020 - Sep 2020',
      place: 'Istanbul, Turkey',
      paragraph: `
      As interns from different departments and specialties our aim was to deliver a product that targets a healthy post-COVID office life. To achieve
      that, we've developed social distance controllers, an infection tracking - contact tracing algorithm, smart labeling system, and limiting people per m2. We've
      used social distance controller wristbands that vibrate under 2 meters and collect the contact information which is later sent to AWS. Our backend derives the
      contact information which provides helpful statistics to the client side (a Flutter mobile app and a React.js web app). I participated in the backend and web
      development. My main contributions are building a non-relational database (Dynamodb) for contact data, initializing API gateways for client integration,
      implementing Authentication with Active Directory using AWS Cognito, implementing many different lambda functions (mostly API functions for the client side),
      building a web app using React.js, Redux, Thunk, SCSS while following Airbnb Eslint practice.`,
      hasDetails: true,
      skills: ['AWS IoT Core', 'DynamoDB', 'Lambda', 'API Gateway', 'React.js', 'Redux', 'Thunk', 'Airbnb Eslint'],
    },
    {
      company: 'Koc University',
      role: 'Undergraduate Teaching Assistant',
      date: 'Jun 2020 - Jul 2020',
      place: 'Istanbul, Turkey',
      paragraph: `
      Teaching Assistant for the course UNIV199 - Introduction to Programming with Python
      `,
      hasDetails: false,
      skills: ['Python'],
    },
    {
      company: 'DAL Engineering Group',
      role: 'Web Development Intern',
      date: 'Aug 2019 - Sep 2019',
      place: 'Istanbul, Turkey',
      paragraph: `
      I worked on the development of a website for a startup using my HTML, CSS, Javascript and React.js skills while 
      following the Scrum software development methodologies.
      `,
      hasDetails: false,
      skills: ['React.js', 'HTML', 'SCSS', 'Javascript'],
    },
    {
      company: 'CHAKSY',
      role: 'Co-founder',
      date: 'Mar 2017 - Present',
      place: 'Istanbul, Turkey',
      paragraph: `
      CHAKSY is a street-style based clothing brand established in Istanbul in March 2017. 
      The brand mainly caters to street fashion and youth culture, with the aim of designing stylish clothes. 
      We started from scratch, without any help or any budget as a challenge. 
      After a year we managed to make profit and our brand was getting popular. It was and my first management and marketing experience. 
      I learned how to make plans, give critical decisions and learned the importance of the audience you are presenting.
      `,
      hasDetails: true,
      skills: ['Marketing', 'Design', 'Management'],
    },
  ],
};

export const projectsText = {

  title: 'Projects',
  data: [
    {
      index: 0,
      title: 'KuGPA',
      paragraph: `
      A web app for students in our college to easily calculate their SPA and GPA by adding or removing courses.
      We've used React.js and Flask (Python) frameworks and implemented all the calculations in the frontend, 
      do the web scraping and processing data in the backend. We've also practiced UI/UX and provided a responsive design (mobile friendly). 
      At present, it's a commonly used, handy tool for students.`,
      date: 'Mar 2020 - Apr 2020',
      link: 'https://kugpa.herokuapp.com/',
    },
    {
      index: 1,
      title: 'laborodor',
      paragraph: `
      A small web app education/work tool developed with pure React.js for my personal use.
      It's a tool for you to work on your daily tasks within a given time period inspired by the Pomodoro technique.
      You can add your tasks with the estimated rounds and personal notes and start working on them while the timer helps
      you to have more efficient work periods.`,
      date: 'Jun 2020 - Jul 2020',
      link: 'https://a-ksy.github.io/laborodor/',
    },
  ],
};
