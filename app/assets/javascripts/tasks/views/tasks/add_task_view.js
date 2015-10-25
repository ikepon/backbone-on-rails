TaskApp.AddTaskView = Backbone.View.extend({
  el: "#addTask",

  events: {
    "submit": "submit"
  },

  submit: function(e) {
    e.preventDefault();

    // var task = new TaskApp.Task({title: $('#title').val()});
    var task = new TaskApp.Task();

    if (task.set({title: $('#title').val()}, {validate: true})) {
      task.save();
      this.collection.add(task);
      $('#error').empty();
    }
  }
});
