// import exprss library
import express, { response } from 'express';

// initialize express server
const app = express();
app.use(express.json());

// add a new student (in theory)
app.post('/students', (request, response) => {
    const newStudent = request.body; 
    students.push9newStudent
;response.status(201).send(students);
});

// List requests that we want express to respond to 
app.get("/hello", (request, response) => {
// do something
console.log("xxx Hello World! xxx"); // back end notes only internal team can see
response.send('Hello World!'); // this is what pushes out to the world for public to see
}) 
const students = [
    { firstName: 'Jonathan', lastName: 'Vegas' },
    { firstName: 'Brigette', lastName: 'Lemus' },
    { firstName: 'Mason', lastName: 'Madaras' },
    { firstName: 'Logan', lastName: 'McCalley' },
    ];

    app.get('/students', (request, response) => { 
response.send(students);
});

app.get('/students/:firstName', (request, response) => {
    const student = students.find(stud => stud.firstName === request.params.firstName);
    if(!student) {
        response.status(404).send({ message: 'student not found', success: false });
        return;
    }
    response.send(student);
});

// start listening on a port
app.listen(3001, () => {
console.log("Now Listening on port 3001");
});