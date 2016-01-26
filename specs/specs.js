describe ('tasker', function() {
  it("adds a task with the given properties", function(){
    var testTask = new Tasker("take out the trash", "1.30.16");
    expect(testTask.task).to.equal("take out the trash");
    expect(testTask.newDeadline).to.equal("1.30.16");
  });

  it("adds newTask method to the task; displays a clickable toggle", function() {
    var testTask = new Tasker("Garbage");
    expect(testTask.newTask()).to.equal("Garbage");
  });
});
