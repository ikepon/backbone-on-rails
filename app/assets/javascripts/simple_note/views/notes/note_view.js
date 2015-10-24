var s;

s = SimpleNote;

s.Notes.NoteView = Backbone.View.extend({
  className: "new-note",

  template: JST["notes/note"],

  events: {
    "click .submit-note-form": "submit",
    "click .back": "navigateToNoteIndex"
  },

  bindings: {
    "#input-note-title": "title",
    "#input-note-raw_body": "raw_body"
  },

  render: function() {
    var preview;
    this.$el.html(this.template(this.model.toJSON()));

    preview = new s.Notes.PreviewView({
      model: this.model,
      el: this.$(".preview-col")
    });

    preview.render();

    this.stickit();

    return this;
  },

  submit: function(e) {
    e.preventDefault();
    return this.trigger("clickSubmit");
  },

  navigateToNoteIndex: function(e) {
    e.preventDefault();
    return Backbone.history.navigate("notes", true);
  }
});
