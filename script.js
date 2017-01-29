$(document).ready(function() {

    var phrases = [
        'Hello everyone.',
        'I am a first year student at IIT Kanpur',
        'I belong to department of Biological Sciences and Bioengineering',
        'Thanks for visiting my homepage ...',
        'Regards,',
        'Aviral Verma',
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
