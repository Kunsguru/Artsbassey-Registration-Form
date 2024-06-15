document.getElementById('summitButton').addEventListener('click', function() {
    var email = 'artsbasseyartsbassey@gmail.com';
    var subject = 'Contact Us';
    var body = 'Hello,\n\nI would like to make an inquiry more about the artswithartsybasy.\n\nThank you.';
    
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    
    window.location.href = mailtoLink;
});


