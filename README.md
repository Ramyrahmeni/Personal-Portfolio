<div align="center">

# Ramy Rahmeni![Portfolio](https://img.shields.io/badge/Portfolio-white?style=for-the-badge)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Green Sock](https://img.shields.io/badge/green%20sock-88CE02?style=for-the-badge&logo=greensock&logoColor=white)


[Purpose](#purpose) •
[Demo](#demo) •
[Tech Stack](#tech-stack) •
[Packages](#packages) •
[Lessons Learned](#lessons-learned)

</div>

## Purpose

- This website is my personal portfolio where I can not only demonstrate my skillset, but also talk about my experiences and past projects that have brought me to where I am now.
- I think there's a beauty in not just making a portfolio, but projects in general. Each project I make is a step towards my goal of learning more about the constantly expanding field of web development and software engineering. 

## Demo

<p align="center">
    <img src="./portfolio-sc/portfolio-gif.gif" width="738" />
</p>


## Screenshots

<h3 align="center">Landing Page<h3>

<p align="center">
    <img src="./portfolio-sc/landing.PNG" alt="portfolio landing page" width="738">
</p>

<h3 align="center">About<h3>

<p align="center">
    <img src="./portfolio-sc/about.PNG" alt="portfolio about page" width="738">
</p>

<h3 align="center">Experience<h3>

<p align="center">
    <img src="./portfolio-sc/experience.PNG" alt="portfolio experience page" width="738">
</p>

<h3 align="center">Projects<h3>

<p align="center">
    <img src="./portfolio-sc/projects.PNG" alt="portfolio project page" width="738">
</p>

<h3 align="center">Contact<h3>

<p align="center">
    <img src="./portfolio-sc/contact.PNG" alt="portfolio contact page" width="738">
</p>

<h3 align="center">Dark Mode Theme<h3>

<p align="center">
    <img src="./portfolio-sc/dark-mode.PNG" alt="portfolio dark mode contact page" width="738">
</p>



## Tech Stack

| Tech Name  | Home Page               |
| ---------- | ----------------------- |
| React      | <https://reactjs.org/>  |
| Vite       | <https://vitejs.dev/>   |

## Packages

| Package Name      | Home Page                        |
| ----------------- | -------------------------------- |
| GSAP (Green Sock)              | <https://greensock.com/>            |
| EmailJS | <https://www.emailjs.com/> |

## Lessons Learned
<p>
I had made my first portfolio back in January, so it felt like it was an odd decision to decide to make a new one so soon (within two months). But with the amount of knowledge I gained in those short two months, I felt like I could do so much better than what I currently had. That inspired my decision to create a new portfolio from scratch that utilized my new web development and design knowledge. 
</p>
<p>
One of the features I really wanted to implement this time around, was a dark mode feature. It was very cool to work with :root variables and having them change based on the theme designated. I had a lot of fun with working with two different themes and I hope to implement something with dark/light theme again in the future! It was tricky getting it to work the first couple days I was working with it. One thing to note, is that while the dark/light toggler works, it doesn't save the theme of the user. If you refresh the page, it will default to light mode. I do know that this is fixable using local storage and storing the currently set theme as a variable in the storage object. However, I wasn't able to implement that just yet. It is in the list of features I am planning to implement though.
</p>
<p>
I had tried to work with Anime.js and a package called Splt.js, but for some reason I could not get them to work properly. I stuck with GSAP for animations and kept the tech pretty vanilla in terms of new packages. I really struggled with making the page-to-page transitions seamless. I think that in the future, I would opt to find a cleaner solution than the one I implemented. It is a bit finnicky so it is definitely not the preferred method. 
</p>
<p>
I also got the opportunity to work with EmailJS which is a package/service that allows you to send emails without any backend code. It was awesome to work with, but I don't know if I'll find another use case for it. Instead of displaying my email and using social links, I wanted to incorporate a contact form that actually sends an email to my inbox. It worked perfectly and I am quite happy with the results. I think I should definitely try to look into using useReducer for forms that have a lot of input states that need to be tracked. I could also look into consolidating the five input states into one state and have the value be an object. Then use the spread operator to update the state object values.
</p>
