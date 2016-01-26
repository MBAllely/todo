function Tasker(task, newDeadline) { // Creates prototype/template for new tasks
  this.task = task;
  this.newDeadline = newDeadline;
};

Tasker.prototype.taskName = function() { //defines a method to be called on newTask
  return this.task;
};

$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var task = $("input#new-task-name").val(); //defines variable from input
    var newDeadline = $("input#new-deadline").val();
    var newTask = new Tasker(task, newDeadline); //creates new task with given parameters


    //appends new task to list
    $("ul#tasks").append("<li><span class='tasks'>" + newTask.taskName() + "<a href='#' class='close' aria-hidden='true'>&times;</a>" + "</span></li>");

    $("input#new-task-name").val("");
    $("input#new-deadline").val("");

    $(".tasks").last().click(function() { //on click, list of tasks shows
      $("#show-task").show();
      $("#show-task h2").text(newTask.taskName());
      $(".task").text(newTask.task);
      $(".deadline").text(newTask.newDeadline);

    });
    $("body").on('click', '#tasks a', function() {
      $(this).closest("li").remove();
      
    });
  });
});
