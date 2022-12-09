var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics(){
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic(){
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}

/*
var shapes = ["triangle", "square", "pentagon", "circle"];
for(var i = 0; i<shapes.length; i++){
    console.log(shapes[i]);
    //Explain the logic within the for loop. Moving i++ to the position of this comment makes more sense w/ control flow.
}
*/

console.log("The following is a list of topics that we learned through the Prework")
listTopics()
console.log("Which topic should we study first?")
selectTopic()