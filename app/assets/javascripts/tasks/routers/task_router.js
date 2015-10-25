TaskApp.TaskRouter = Backbone.Router.extend({
  routes: {
    "tasks/:id": "showTask",
    "tasks": "indexTasks"
  },

  indexTasks: function() {
    this.tasks || (this.tasks = new TaskApp.Tasks());

    this.currentView = new TaskApp.TasksView({
      collection: this.tasks
    });

    this.tasks.fetch({
      reset: true
    });
  }
});
