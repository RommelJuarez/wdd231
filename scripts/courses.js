const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    } 
]
const classesContainer = document.querySelector('.classes');
const filterButtons = document.querySelectorAll('.filter-buttons button');
const modal=document.querySelector("#details");
const closeButton=document.querySelector("#closeModal");
function renderCourses(filter) {
    classesContainer.innerHTML = '';
    const filteredCourses = filter === 'all'
        ? courses
        : courses.filter(course => course.subject === filter);
    filteredCourses.forEach(course => {
        const courseElement = document.createElement('a');
        courseElement.href = '#';
        courseElement.p
        courseElement.addEventListener("click",(event)=>{modal.showModal();
            event.preventDefault();
            displayModal(course);
        });
        
        courseElement.textContent = `${course.subject} ${course.number}`;
        if (course.completed) {
            courseElement.classList.add('completed');
        }
        classesContainer.appendChild(courseElement);
    });
    const totalCredits = courses
    .filter(course => course.completed) 
    .reduce((sum, course) => sum + course.credits, 0);


let totalCreditsElement = document.querySelector('.total-credits');
if (!totalCreditsElement) {
    totalCreditsElement = document.createElement('p');
    totalCreditsElement.classList.add('total-credits');
    classesContainer.appendChild(totalCreditsElement);
}
totalCreditsElement.textContent = `Total Credits for Completed Courses: ${totalCredits}`;
}
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        renderCourses(filter);
    });
});
 function displayModal(x){
    const modalTitle = document.querySelector('#modalTiltle');
    const courseTitle = document.querySelector('#courseTiltle');
    const credits = document.querySelector('#credits');
    const certificate = document.querySelector('#certificate');
    const modalDescription = document.querySelector('#modalDescription');
    const modalTech = document.querySelector('#modalTech');
    const close=document.querySelector('#closeModal');

    modalTitle.innerHTML=`${x.subject} ${x.number}`;
    courseTitle.innerHTML=x.title;
    credits.innerHTML=`Credits: ${x.credits}`;
    certificate.innerHTML=x.certificate;
    modalDescription.innerHTML=x.description;
    modalTech.innerHTML=x.technology.map(tech=>` ${tech} `).join('');
    close.addEventListener('click',()=>{
        modal.close();
    });


 };
closeButton.addEventListener("click",()=>{
    modal.classList.toggle("close");
});

renderCourses('all');