# Overview

I have always liked high organization in my life. And I highly value the importance of doapamine, through checklists and simular tasks. 

The goal here is to create a habit, daily, and goal tracking app that organizes your efforts into different categories and is easy to navigate. I want to make it as comprehensive as possible, while also leaving it simple and easy to learn. Making the project look professional is highly important, as that will come across better to users. 

{Provide a description the web app that you wrote. Describe how to start a test server on your computer and what website to open up to see the first page of the app.}

You can acess my app through the following link:
[Remind Websight](http://youtube.link.goes.here)

Click the plus sign beside a task title to add a new checklist item. Then type in the textbox the name of your new task and press enter.
You can make as many tasks as you want. 
Use the dropdown arrow to show and hide tasks. 
If you don't need a task anymore, you can hit the delete button to remove the task.

{Provide a link to your YouTube demonstration.  It should be a 4-5 minute demo of the software running (starting the server and navigating through the web pages) and a walkthrough of the code.}

[Software Demo Video](http://youtube.link.goes.here)

# Web Pages

{Describe each of the web pages you created and how the web app transitions between each of them.  Also describe what is dynamically created on each page.}

Right now there is only one webpage, the main app. The purpose of this page, is to create checklist items and cross them out when checked off. It is meant for mobile devices, and is a scrollable application.

# Development Environment

I used visual studio Code for most of my planning. And relied heavily on Chat GPT to help me write the JavaScript Code. 

I used Html, Css, JavaScript, and I have made a json file for storing information.

# Useful Websites

{Make a list of websites that you found helpful in this project}
* [Web Site Name](http://url.link.goes.here)
* [Web Site Name](http://url.link.goes.here)
* [Web Site Name](http://url.link.goes.here)

# Future Work

* I want to make it so that the program remembers the checklist items when closed or refreshed. I plan to do this through integration of local storage. Then eventually a database.
* I want to make it so that Checklist items change colors dependant on the number of times they have been checked off. I will do this by keeping track of a number variable in my JSON files and dynamically changing the color according to the numbers.
* I want to make it so that the daily, weekly, and monthly checklist items automatically uncheck themselves after a given period of time. I will do this by uploading the data to a database upon closing the app. And I will load in this data when the app opens, along with timestamps that tell the program when these apps were last checked off. It will then determine the amount of time that has passed, and uncheck them if its been an adiquate amount of time. 
* I want to make it so that Checklist items remain checked off or hidden when the page is closed. I will do this using the above database. 
* I want to make it so that various people can log onto the app with seperate usernames. I will use this using firestore database working with Django. 
* I want to make this app communicate with an android application using a database. 
* I want to make it so that the header, and the outline are fixed in place, while all the content of main scrolls.  