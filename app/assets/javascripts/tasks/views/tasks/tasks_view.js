TaskApp.TasksView = Backbone.View.extend({
  tagName: "ul",
  id: "tasks",

  initialize: function() {
    this.collection.on("add", this.addNew, this);
    this.collection.on("change", this.updateCount, this);
    this.collection.on("destroy", this.updateCount, this);

    return this.listenTo(this.collection, "reset", (function(_this) {
      return function() {
        return _this.render();
      }
    })(this));
  },

  addNew: function(task) {
    var taskView = new TaskApp.TaskView({model: task});
    this.$el.append(taskView.render().el);
    $("#title").val("").focus();
    this.updateCount();
  },

  updateCount: function() {
    var uncompletedTasks = this.collection.filter(function(task) {
      return !task.get("completed");
    });
    $("#count").html(uncompletedTasks.length);
  },

  render: function() {
    this.collection.each((function(_this) {
      return function(task) {
        var taskView = new TaskApp.TaskView({
          model: task
        });

        return _this.$el.append(taskView.render().el);
      };
    })(this));

    $("#tasks-main").html(this.el);
    this.updateCount();
    return this;
  }
});
