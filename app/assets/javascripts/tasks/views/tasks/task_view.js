TaskApp.TaskView = Backbone.View.extend({
  tagName: 'li',
  id: function() {
    return "task-" + this.model.id;
  },
  className: "task",

  template: JST['tasks/task'],

  initialize: function() {
    this.model.on("destroy", this.remove, this);
    this.model.on("change", this.render, this);
  },

  events: {
    "click .delete": "destroy",
    "click .toggle": "toggle"
  },

  render: function() {
    var taskStatus;

    this.$el.html(this.template(this.model.toJSON()));
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
