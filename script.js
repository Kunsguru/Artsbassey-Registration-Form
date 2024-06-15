document.getElementById('summitButton').addEventListener('click', function() {
            document.getElementById('emailForm').classList.remove('hidden');
        });

        document.getElementById('sendEmailButton').addEventListener('click', function() {
            var email = 'artsbasseyartsbassey@gmail.com';
            var subject = 'Help Desk';
            var userMessage = document.getElementById('userMessage').value;
            var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(userMessage);
            
            window.location.href = mailtoLink;
        });

        document.getElementById("homeButton").onclick = function() {
            window.location.href = "https://aaartswithartsbasy2024.onrender.com/";
        }
