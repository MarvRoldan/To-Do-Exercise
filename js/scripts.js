var tableBody = document.getElementById( "my-table-body" );
var form = document.getElementById( "task-form" );


form.addEventListener( "submit", function( event ) {
    event.preventDefault();

    var task = document.getElementById( "task" ).value;

    var newRow = document.createElement( "tr" );

    var newTask = document.createElement( "td" );
    newTask.innerHTML = task;
    newRow.appendChild( newTask );

    var newTask = document.createElement( "input" );
    newTask.setAttribute("type", "checkbox");      
    newTask.textContent = task; 
    newRow.appendChild( newTask ); 

    tableBody.appendChild( newRow );

    document.getElementById( "task" ).value = "";
} );