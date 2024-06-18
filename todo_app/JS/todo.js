// gets task from input
function get_todos(){
    //creates array of inputted tasks
    var todos = new Array;

    //pulls saved tasks from browser memory
    var todos_str = localStorage.getItem('todo');

    //if input not null the create js object
    if(todos_str !== null){
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//adds inputted tasks to get_todos array
function add() {
    //takes input tasks and creates var
    var task = document.getElementById('task').value;

    var todos = get_todos();

    todos.push(task);

    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";
    show();

    return false;
}

//keeps tasks perm displayed on screen
function show(){
    var todos = get_todos();

    var html = '<ul>'

    for (var i = 0; i < todos.length; i++){
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };

    html += '<ul>';
    document.getElementById('todos').innerHTML = html;
}

document.getElementById('add').addEventListener('click' , add);
show();