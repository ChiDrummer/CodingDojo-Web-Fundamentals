// write a function that outputs both first nams and last name

function printNames(){
var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]

    for (student in students) {
        var x = students[student];
        console.log("this is my first name", x.first_name, "this is my last name", x.last_name);
    }
    return students;
}
printNames();

/*write a function that returns the folowing output
Students
1 - MICHAEL JORDAN - 13
2 - JOHN ROSALES - 11
3 - MARK GUILLEN - 11
4 - KB TONEL - 7
Instructors
1 - MICHAEL CHOI - 11
2 - MARTIN PURYEAR - 13
*/

function printMore(){
    var users = {
        'Students': [ 
            {first_name:  'Michael', last_name : 'Jordan'},
            {first_name : 'John', last_name : 'Rosales'},
            {first_name : 'Mark', last_name : 'Guillen'},
            {first_name : 'KB', last_name : 'Tonel'}
         ],
        'Instructors': [
            {first_name : 'Michael', last_name : 'Choi'},
            {first_name : 'Martin', last_name : 'Puryear'}
         ]
        }
        

    // var count = 0;
    // var length = 0;

    for (user in users) {
        var x = users[user];
        console.log(x);
    }

}


