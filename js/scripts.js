function Tasker(newTask) { // Creates prototype/template for new tasks
  this.newTask = newTask
}

$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var newTask = $("input#new-task-name").val(); //defines variable from input

    //appends new task to list
    $("ul#tasks").append("<li><span class='tasks'>" + newTask + "<a href='#' class='close' aria-hidden='true'>&times;</a>" + "</span></li>");

    $("input#new-task-name").val("");

    $(".tasks").last().click(function() { //on click, list of tasks shows
      ("#show-task").show();
      (".task-name").text(newTask.task-name);
    });
    $("body").on('click', '#tasks a', function() {
       $(this).closest("li").remove();
  })
});
});
