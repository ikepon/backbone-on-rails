var s;

s = this.SimpleNote;

s.Notes.NewView = Backbone.View.extend({
  className: "new-note",

  template: JST["notes/new"],

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    $("#main").html(this.el);

    return this;
  }
});
