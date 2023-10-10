# Overview

I have always liked high organization in my life. And I highly value the importance of doapamine, through checklists and simular tasks. 

The goal here is to create a habit, daily, and goal tracking app that organizes your efforts into different categories and is easy to navigate. I want to make it as comprehensive as possible, while also leaving it simple and easy to learn. Making the project look professional is highly important, as that will come across better to users. 

You can acess my app through the following link:
[Remind Websight](https://trueglimgrold.github.io/Remind_Web/)

Click the plus sign beside a task title to add a new checklist item. Then type in the textbox the name of your new task and press enter.
You can make as many tasks as you want. 
Use the dropdown arrow to show and hide tasks. 
If you don't need a task anymore, you can hit the delete button to remove the task.

{Provide a link to your YouTube demonstration.  It should be a 4-5 minute demo of the software running (starting the server and navigating through the web pages) and a walkthrough of the code.}

[Software Demo Video](http://youtube.link.goes.here)

# Web Page

Right now there is only one webpage, the main app. The purpose of this page, is to create checklist items and cross them out when checked off. This app is primarally designed for mobile devices, but works well on desktop computers as well. 

# Development Environment

I used visual studio Code for most of my planning. And relied heavily on Chat GPT to help me write the JavaScript Code. 

I used Html, Css, and JavaScript.

# Useful Websites

* [YouTube](https://www.youtube.com/watch?v=EEiqGjCNLRs&ab_channel=PythonSimplified)
* [Github](https://pages.github.com/)
* [Stack Overflow](https://stackoverflow.com/questions/4181861/message-src-refspec-master-does-not-match-any-when-pushing-commits-in-git)

# Future Work

* I want to make it so that Checklist items change colors dependant on the number of times they have been checked off. I will do this by keeping track of a number variable in my JSON files and dynamically changing the color according to the numbers.
* I want to make it so that the daily, weekly, and monthly checklist items automatically uncheck themselves after a given period of time. I will do this by uploading the data to a database upon closing the app. And I will load in this data when the app opens, along with timestamps that tell the program when these apps were last checked off. It will then determine the amount of time that has passed, and uncheck them if its been an adiquate amount of time. 
* I want to make it so that Checklist items remain checked off or hidden when the page is closed. I will do this using the above database. 
* I want to make it so that various people can log onto the app with seperate usernames. I will use this using firestore database working with Django. 
* I want to make this app communicate with an android application using a database. 
* I want to make it so that people can push a button beside the checklist items, that allows them to schedule a time they will complete the item. Then I want them to be able to scroll through, and navigate the schedule. 
