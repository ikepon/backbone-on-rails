//= require lodash
//= require backbone
//= require backbone.stickit/backbone.stickit
//= require handlebars.runtime
//= require_self
//= require_tree ./routers
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views

'use strict'

this.TaskApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    this.router = new TaskApp.Routers.NoteRouter();
    return Backbone.history.start({
      pushState: true
    });
  }
};

$(function() {
  return TaskApp.init();
});
