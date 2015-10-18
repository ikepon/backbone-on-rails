TaskApp.TaskView = Backbone.View.extend({
  tagName: 'li',

  initialize: function() {
    this.model.on("destroy", this.remove, this);
    this.model.on("change", this.render, this);
  },

  events: {
    "click .delete": "destroy",
    "click .toggle": "toggle"
  },

  template: JST['tasks/task'],

  render: function() {
    var taskStatus;
    this.model.get('completed') ? taskStatus = 'checked' : taskStatus = '';

    var template = this.template(this.model.toJSON(), {taskStatus: taskStatus});
    this.$el.html(template);
    return this;
  },

  destroy: function() {
    if (confirm("are you sure?")) {
      this.model.destroy();
    }
  },

  remove: function() {
    this.$el.remove();
  },

  toggle: function() {
    this.model.set('completed', !this.model.get('completed'));
  }
});
