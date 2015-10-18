TaskApp.AddTaskView = Backbone.View.extend({
  el: "#addTask",

  events: {
    "submit": "submit"
  },

  submit: function(e) {
    e.preventDefault();

    var task = new TaskApp.Task({title: $('#title').val()});
    this.collection.add(task);
  }
});
