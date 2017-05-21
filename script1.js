$(document).ready(function() {

    var phrases = [
        'Welcome to the Course Stuff',
        'Here you may check your examination schedule',
        'and you can also have a look at various study resources',
        'Good luck with your preparation !!',
        
    ];
    var len = phrases.length;
    var index = 0;

    var ctrl = bubbleText({
        element: $('#bubble'),
        newText: phrases[index++],
        letterSpeed: 70,
        repeat: Infinity,
        timeBetweenRepeat: 1000,
        callback: function() {
            this.newText = phrases[index++ % len];
        },
    });
});
Contact GitHub API Training Shop Blog About
