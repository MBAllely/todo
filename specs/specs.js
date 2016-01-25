describe ('tasker', function() {
  it("adds a task to the list of tasks", function(){
    var testTask = new Tasker("take out the trash");
    expect(testTask.newTask).to.equal("take out the trash");
  });
});
