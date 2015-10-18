TaskApp.TasksView = Backbone.View.extend({
  tagName: 'ul',
  render: function() {
    this.collection.each(function(task) {
      var taskView = new TaskApp.TaskView({ model: task });
      this.$el.append(taskView.render().el);
    }, this);
    return this;
  }
});
