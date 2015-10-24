var s;

s = this.SimpleNote;

if (s.Notes == null) {
  s.Notes = {};
}

s.Notes.IndexItemView = Backbone.View.extend({
  tagName: 'li',
  id: function() {
    return "note-" + this.model.id;
  },
  className: "note",

  initialize: function() {
    return this.listenTo(this.model, "destroy", (function(_this) {
      return function() {
        return _this.remove();
      };
    })(this));
  },

  template: JST["notes/index_item"],

  events: {
    "click .note-title": "navigateToNote",
    "click .delete-note": "deleteNote"
  },

  render: function() {
    var context;
    context = this.model.toJSON();

    _.extend(context, {
      previewText: this.model.previewText()
    });

    this.$el.html(this.template(context));
    return this;
  },

  navigateToNote: function(e) {
    e.preventDefault();
    return Backbone.history.navigate("notes/" + this.model.id, true);
  },

  deleteNote: function(e) {
    e.preventDefault();

    if (confirm("ノートを削除しますか？")) {
      this.model.destroy();
    }
  }
});
