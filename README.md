# Horror House

![mocup devices view](https://github.com/j-noon/horrorhouse/blob/main/Documents/hh-mocup-cutout.png)

# Contents

1. [About Horror house](#about-Horror-House)
2. [User goals and experiance](#user-goals-and-experiance)
3. [Features](#features)
4. [Wireframes](#wireframes)
5. [Deployment](#deployment)
6. [Testing](#testing-and-findings)
7. [References](#references)
8. [Tools and Technologies](#tools-and-technologies)
9. [Acknowledgements](#acknowledgments)


# About Horror House
  welcome to Horror House. Horror House is a very small click puzzle game. It's idea is to engage with the user to have them think and actually pay atention to the page. If they are able to decipher my small puzzles they will eventually get to the end and be able to find the token to escape the room's.  The idea is to be slightly educational and to hint and show small tips within the cyber security field for what and how pen-testers go about their day to day tests and exploits. This small game is intended to be played on a device with a keyboard and mouse so PC is advised, although all features are still functionable on phones tablets. 

 # User goals and Experiance

## Target-Audeince
- age range from 12+ up to early 30s.
- Any one who enjoys a good puzzle/brain teaser and cyber security learners.
- horror puzzle gamers.

## 1st time vist goals
- To have thier brains put to the test.
- Engage there awarness to the page.
- The want to finish the game.

## Returning viewers
- To progress in the game and learn some new stuff.
- find all the tokens and escape.
- to practice the modules and get more understanding in what they've learnt.


# Purpose of Horror House
Horror Houese's main purpose is for educational gain. By leaving clues on what to do and where to press it will demostrate examples of pentesting techniques that are used day to day in the field of a pen-tester. With the clues getting less and less helpful, and the puzzles getting harder, it will force the users to then go and search or read up about the technique thats being hinted upon, for them to then return to the game to then finally be able to complete the game by escaping the rooms.   

# Features

## game rooms
Depending on which room your in the image will display the room. 
 - Hidden clicks - Hidden buttons to naviagte into the next room.
 - hints button - depending on which room your in if you ask for a hint a specified hint will display. 
 ![game room area image and clue](https://github.com/j-noon/horrorhouse/blob/main/Documents/hh-game-area.png)
 ## Token checker
 - Hidden Token - The token you need to leave the room can be found once said criteria clicks are made. 
 - Token Input - A field of where you can only input text and it checks to see weather the token is correct or not. 
 - Hint Button - a clickable bit of text that will display a specific clue depending on certain factors. ie what room your in.


![hint button and token checker ](https://github.com/j-noon/horrorhouse/blob/main/Documents/token-checker.png)

# Pages

## Home Page
+  landing page, this page has the play button to go into the game area.
+  It has clearly written instructions on how to play.
+  This page explains what the end goal is, and that is the need to escape. 


## Game Page
+  This has the game area where we click the images to be able to progress through the room's.
+  down undeneath the game room images it has a hint.
+  It also has a "need a hint" buttont that produces another hint if asked for.
+  the input fild at the bottom is to check if token is correct. 



## Design
![design colors](https://github.com/j-noon/horrorhouse/blob/main/Documents/hh-design-colors.png)

- I tried to stay simple and basic with color picks.
- font awsome is used for the icons in the favicons.
- font styles used are brush-script', Courier, monospace.


# Wireframes
 wireframes were made in canva
## Wireframes for mobile (375px)
    Home page for mobile
 ![home](https://github.com/j-noon/horrorhouse/blob/main/assets/wireframes/hh-home-small-devices.png)

    Game page for mobile
 ![Game](https://github.com/j-noon/horrorhouse/blob/main/assets/wireframes/hh-game-small-devices.png)

    Admin page for mobile
 ![Admin](https://github.com/j-noon/horrorhouse/blob/main/assets/wireframes/hh-admin-small-devices.png)



### wireframes for tablets (768px)
    Home page for tablets
 ![Home](https://github.com/j-noon/horrorhouse/blob/main/assets/wireframes/hh-home-tablets.png)

    Game page for tablets
 ![Game](https://github.com/j-noon/horrorhouse/blob/main/assets/wireframes/hh-game-tablets.png)

       Admin page for tablets
 ![Admin](https://github.com/j-noon/horrorhouse/blob/main/assets/wireframes/hh-admin-tablets.png)



### wireframes for desktops (1024px) 
     Home page for desktops
 ![home](https://github.com/j-noon/horrorhouse/blob/main/assets/wireframes/hh-home-desktops.png)

     Game page for desktops
 ![Game](https://github.com/j-noon/horrorhouse/blob/main/assets/wireframes/hh-game-desktops.png)

      Admin page for desktops
 ![Admin](https://github.com/j-noon/horrorhouse/blob/main/assets/wireframes/hh-admin-desktops.png)




# Deployment

## Github Pages

The site was deployed to Github Pages using the following method:

- Go to the Github repository.
- Navigate to the 'settings' tab.
- Using the 'select branch' dropdown menu, choose 'main'.
- Click 'save'.

## Local deployment and cloning

To make a clone of the site and ensure you don't affect the original:

- Navigate to the Github repository that you want to clone.
- Click on the 'down'arrow on the green 'code' button.
- Copy the URL link.
- Open the workspace with the green 'open' button.
- In the command terminal enter 'git clone' followed by the copied url.
- Press enter to create the clone.

- final deployed version is here [Horror-House](https://j-noon.github.io/horrorhouse/). All made responsive with all links working. color scheme is all matching and approved by wave chrome ext (excluding one contrast error but i need this for the game to work), also code has been ran through wc3 html checker,  css validator (jigsaw), and jslinter. 


# testing and findings
+ upon deployment the nugget was not in its correct loacation. 
+ event h pressing shows the hint thats been clicked not the room where in. 
 

| ELEMENT | PROCESS | EXPECTED RESULT | OUTCOME |
| ------- | ------- | --------------- | ------- |
| Logo    | Click   | Return to homepage | Successful |
| 'play' button | Click | goes to game page | Successful |
| hint button | Click | shows a hint specific to the room were in | Successful |
| hint prompt | key press h | shows and doesnt show hint | successful |
| token check | input text  | checks the token and responds accordingly | successful |
| Broken link | Enter | Navigate to 404 page | Successful | 


## Index page validated
![index validated](https://github.com/j-noon/horrorhouse/blob/main/Documents/hh-admin-html-pass.png)
## Game page validated
![Game validated](https://github.com/j-noon/horrorhouse/blob/main/Documents/hh-game-html-pass.png)
## CSS page validated
![css us validated](https://github.com/j-noon/horrorhouse/blob/main/Documents/hh-css-pass.png)
## Admin page validated
![Admin validated](https://github.com/j-noon/horrorhouse/blob/main/Documents/hh-admin-html-pass.png)
## java-script validated
![java-script validated](## Admin page validated
![Admin validated](https://github.com/j-noon/horrorhouse/blob/main/Documents/hh-lint-pass.png)


## found bugs
- my peice of gold that marks the key in room to wasnt in correct places when using a extra large display. this has now been amended. This was fixed by setting the gold position from the top left of the game room image rather than from the top left of page.
- Hints where not changing when rooms changed. i now corected this. I made adjustments to the java-script to make if and if else statements. If room index is 1, then hint content changes, and then the if else is, if the book found is 'true' the hint content changes.
- When "h" press it shows hint for the hint thats clicked last instead of the hint corelating with the room your in. this will be looked at in next version push. 
- clickable areas needed adjusting lots as to get correct positions. By setting min/max width and hieght values i had to adjust the values to corolate with making the click areas be over the doors on the game room images.
- terminal content was breaking out of its container box, this has now been corrected. In the modals CSS 'gobuster-modal.terminal' i used the overflow-wrap:anywhere and it now keeps the content nicely within the area it should be.
- admin pages flow seems abit off but its been adjusted by using marigns and positioning to space out the content to where i wanted it for both development and deployment versions. 





# References

## images
All images used on the site are taken from google, i ensured that they are not copy written and that i am able to use theese images displayed. 

## code
- all code has been written by myself with the help of a friend giving me tips and examples along the way. 
- wc3 validator and css has passed the css validator. 
- HTML validator has shown a pass on all pages. 
- java script passed with linter warnings in the js-linter. warnings are to do with the IDE enviroment and doesnt have any effects on the web application.   


# Tools and Technologies

- [HTML](https://en.wikipedia.org/wiki/HTML) was used to write the website code.
- [CSS](https://en.wikipedia.org/wiki/CSS) was used to style the website.
- [java-script](https://en.wikipedia.org/wiki/JavaScript) was used to give funtionallity to the pages.
- [VScode](https://code.visualstudio.com/) as locaL IDE.
- [Github](https://github.com) and Github Pages to deploy and host the website.
- [Google](https://www.google.co.uk/) as a search engine for all queries.
- [GoogleChrome](https://www.google.com/intl/en_uk/chrome/?brand=QCTP&gad_source=1&gclid=CjwKCAjwhIS0BhBqEiwADAUhc2pz-_bvU7f850ozLnJ1cfu6Y8tIfP4BXfL7naeQKo15Tjzwkt3U5hoClfYQAvD_BwE&gclsrc=aw.ds) to test and view website.
- [GoogleDevTools](https://developer.chrome.com/docs/devtools) to identify bugs and general website tailoring.
- [TinyPNG](https://tinypng.com/) to convert images from png to webp.
- [PhotoscapeX](https://photoscape.en.softonic.com/?utm_source=SEM&utm_medium=paid&utm_campaign=EN_UK_DSA&gad_source=1&gclid=CjwKCAiA5Ka9BhB5EiwA1ZVtvFH7aWmx3he0mnP4GH7c2HDNUaYje_Ck1oBY1xUUDMHXc5tk6l-trBoCFzEQAvD_BwE) to resize images.
- [canva](https://www.canva.com/) to create the wireframes. 
- [techsnini](https://techsini.com/) to make moc ups devices.

# Acknowledgments
A big big thank you to the guys at code-institute: migeul, To my mentor: Gareth McGirr and my good good friend Ryan. 