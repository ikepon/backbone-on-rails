TaskApp.TasksView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function() {
    this.collection.on('add', this.addNew, this);
  },

  addNew: function(task) {
    var taskView = new TaskApp.TaskView({model: task});
    this.$el.append(taskView.render().el);
  },
  render: function() {
    this.collection.each(function(task) {
      var taskView = new TaskApp.TaskView({ model: task });
      this.$el.append(taskView.render().el);
    }, this);
    return this;
  }
});
