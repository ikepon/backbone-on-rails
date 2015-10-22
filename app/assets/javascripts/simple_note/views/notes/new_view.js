var s;

s = this.SimpleNote;

s.Notes.NewView = Backbone.View.extend({
  className: "new-note",

  template: JST["notes/new"],

  bindings: {
    "#input-note-title": "title",
    "#input-note-raw_body": "raw_body"
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    $("#main").html(this.el);

    this.stickit();

    return this;
  }
});
