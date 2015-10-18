TaskApp.TaskView = Backbone.View.extend({
  tagName: 'li',
  template: JST['tasks/task'],

  render: function() {
    var template = this.template(this.model.toJSON());
    this.$el.html(template);
    return this;
  }
});
