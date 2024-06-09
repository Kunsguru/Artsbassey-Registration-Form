const adminPassword = '1234'; // Set your admin password here

        let students = JSON.parse(localStorage.getItem('students')) || [];

        function saveStudents() {
            localStorage.setItem('students', JSON.stringify(students));
        }

        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const phone = document.getElementById('regPhone').value;
            const plan = document.getElementById('regPlan').value;

            const student = {
                name,
                email,
                phone,
                plan,
                tag: '',
                contributions: [],
                totalContribution: 0
            };
            students.push(student);
            saveStudents();
            document.getElementById('registrationForm').reset();
        });

        function displayRegisteredStudent(student, index) {
            const registeredStudents = document.getElementById('registeredStudents');
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span>Name: ${student.name}, Email: ${student.email}, Phone: ${student.phone} ${student.tag ? '(' + student.tag + ')' : ''}</span>
                <button class="tag-button" onclick="tagStudent(${index}, 'older')">Tag Older</button>
                <button class="tag-button" onclick="tagStudent(${index}, 'newer')">Tag Newer</button>
                <button class="remove-button" onclick="removeStudent(${index})">Remove</button>`;
            registeredStudents.appendChild(listItem);
        }

        function displayAllStudents() {
            const registeredStudents = document.getElementById('registeredStudents');
            registeredStudents.innerHTML = ''; // Clear previous entries
            students.forEach(displayRegisteredStudent);
        }

        document.getElementById('viewStudentsButton').addEventListener('click', function() {
            const password = prompt('Enter the admin password:');
            if (password === adminPassword) {
                displayAllStudents();
                document.getElementById('studentsOverlay').style.display = 'flex';
            } else {
                alert('Incorrect password. Access denied.');
            }
        });

        document.getElementById('closeOverlayButton').addEventListener('click', function() {
            document.getElementById('studentsOverlay').style.display = 'none';
        });

        function tagStudent(index, tag) {
            students[index].tag = tag;
            saveStudents();
            displayAllStudents();
        }

        function removeStudent(index) {
            students.splice(index, 1);
            saveStudents();
            displayAllStudents();
        }

        // Display all students when the page loads
        document.addEventListener('DOMContentLoaded', displayAllStudents);

