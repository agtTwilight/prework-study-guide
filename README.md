# Prework Study Guide
## Description
This project was made to introduce students to web development. We learned and implemented the basics of HTML, CSS, git, and JS, to create a basic webpage that would store notes and provide the user a topic to study. Each time a user vists the page, a randomized prompt will encourage them to study one of the 4 key topics in front-end development (HTML, CSS, git, and JS).
## Installation
N/A
## Usage
1. Open the brower.
2. Open Chrome Developer Tools with one of the following methods:
- Command+Option+I (MacOS).
- Control+Shift+I (Windows).
- Right clicking anywhere on the page and selecting the 'Inspect' option.
3. Select 'Console' to view the randomized JS output.
4. Start studying!
## Credits
N/A
## License
Review the included License document in this repository.
## Tests
Each time the browser is opened/refreshed, it makes a call to two functions:
- listTopics(), lists the topics we studied during the prework.
- selectTopic(), randomly selects a topic from the provided list.
In each instance of visiting the site, you may notice that repeated calls to the 'selectTopic()' function will result in a non-random output. That's because a randomTopic variable is used in the function, and it is created outside of the function. The randomTopic variable is only randomized upon each refresh of the website. Test it out yourself!