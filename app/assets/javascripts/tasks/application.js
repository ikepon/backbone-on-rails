//= require lodash
//= require backbone
//= require backbone.stickit/backbone.stickit
//= require handlebars.runtime
//= require_tree ./routers
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views

//= require_self

'use strict'

$(function() {
  var tasks = new TaskApp.Tasks([
    {
      title: 'task1',
      completed: true
    },
    {
      title: 'task2'
    },
    {
      title: 'task3'
    }
  ]);

  var tasksView = new TaskApp.TasksView({ collection: tasks });
  $('#tasks').html(tasksView.render().el);
});
