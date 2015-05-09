#CAPP30370 Final Project
This site's purpose is to provide users with more information about The Broadmoor Hotel, a resort in my hometown. From the site, a user can get more information about the hotel itself, as well as some of the dining options and the activities that are on site. The goal is to educate the user about the hotel.

There are three pages, the homepage (index.html), the explore page (activites.html), and the dining page (dining.html). These can all be reached using the nav bar.

I got all of the images and copy from the hotel's actual site, broadmoor.com

##Starred Items:  
###HTML:  
* srcset: Implemented in activities.html page, starting on line 29  

###CSS:  
* Two breakpoints: implemented in every .css file, towards the bottom of the file, at 700px and 1000px  
* Three column layout: index.html does this using a flexbox at the bottom of the page, as well as on other pages  
* CSS Animation: pictures at the top of dining.html make a slideshow using css animations  
* Flexbox: index.html does this using a flexbox at the bottom of the page, also found on other pages and in the nav bar of every page  
* Background Image: found on index.html, in the #jumbotron div  

###Javascript:  
* Javascript Animation: In index.html, I have the words 'welcome to' slide into the page using animation code found in index.js  
* Toggle css style: In index.html, the large image at the top of the page is sized based on the dimensions of the viewport, which javascript reads and then adds css height as needed to the div. Implemented in index.js  
* Element visibility: In index.html, the words at the top fade in and out, implemented in index.js  

## Grading

1. **Readme** 5 points
2. **Wireframes** 10 points
3. **HTML** 14 points
	1. Just a note, the container of your primary content should be `<main>`, but what you have is technically valid.
	2. On your srcset, the 33.3vw is telling the browser that any size above 36em, the image is only going to be 33% the width of the browser. That is technically incorrect. You should have just had the 100vw since at all sizes the images are full width.
4. **CSS** 10 points
5. **Javascript** 10 points

### Notes
Managing the site would be a lot easier if you used a single js file and a single css file. All three contain a lot of duplcate code, which if they were all using shared files, would reduce maintenence and downloads for the user.

Nice looking site. Well done this semester.