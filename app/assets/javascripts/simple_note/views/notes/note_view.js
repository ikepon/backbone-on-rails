var s;

s = this.SimpleNote;

s.Notes.NoteView = Backbone.View.extend({
  className: "new-note",

  template: JST["notes/note"],

  events: {
    "click .submit-note-form": "submit"
  },

  bindings: {
    "#input-note-title": "title",
    "#input-note-raw_body": "raw_body"
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    $("#main").html(this.el);

    this.stickit();

    return this;
  },

  submit: function(e) {
    e.preventDefault();
    return this.trigger("clickSubmit");
  }
});
