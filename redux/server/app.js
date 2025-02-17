import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/students', (req, res) => {
  
 

    const students = [
        { name: 'John Doe', rollno: '123', currentback: 0 },
        { name: 'Jane Smith', rollno: '124', currentback: 1 },
        { name: 'Alice Johnson', rollno: '125', currentback: 2 },
        { name: 'Bob Brown', rollno: '126', currentback: 0 },
        { name: 'Charlie Davis', rollno: '127', currentback: 1 },
        { name: 'Diana Evans', rollno: '128', currentback: 2 },
        { name: 'Eve Foster', rollno: '129', currentback: 0 },
        { name: 'Frank Green', rollno: '130', currentback: 1 },
        { name: 'Grace Harris', rollno: '131', currentback: 2 },
        { name: 'Hank Irving', rollno: '132', currentback: 0 },
        { name: 'Ivy Johnson', rollno: '133', currentback: 1 },
        { name: 'Jack King', rollno: '134', currentback: 2 },
        { name: 'Karen Lee', rollno: '135', currentback: 0 },
        { name: 'Leo Martin', rollno: '136', currentback: 1 },
        { name: 'Mona Nelson', rollno: '137', currentback: 2 },
        { name: 'Nina Owens', rollno: '138', currentback: 0 },
        { name: 'Oscar Perry', rollno: '139', currentback: 1 },
        { name: 'Paul Quinn', rollno: '140', currentback: 2 },
        { name: 'Quincy Roberts', rollno: '141', currentback: 0 },
        { name: 'Rachel Scott', rollno: '142', currentback: 1 }
    ];
   
    setTimeout(() => {
        res.send(students);
    }, 5000);
    
});

const port = 8080;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});