TaskApp.TaskView = Backbone.View.extend({
  tagName: 'li',
  id: function() {
    return "task-" + this.model.id;
  },
  className: "task",

  template: JST['tasks/task'],

  initialize: function() {
    this.model.on("change", this.render, this);

    return this.listenTo(this.model, "destroy", (function(_this) {
      return function() {
        return _this.remove();
      };
    })(this));
  },

  events: {
    "click .delete-task": "deleteTask",
    "click .toggle": "toggle"
  },

  render: function() {
    var taskStatus;

    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  deleteTask: function(e) {
    e.preventDefault();

    if (confirm("タスクを削除しますか？")) {
      this.model.destroy();
    }
  },

  remove: function() {
    this.$el.remove();
  },

  toggle: function() {
    this.model.set('completed', !this.model.get('completed'));
    this.model.save();
  }
});
