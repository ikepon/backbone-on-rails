var  s;

s = SimpleNote;

if (s.Notes == null) {
  s.Notes = {};
}

s.Notes.IndexView = Backbone.View.extend({
  template: JST["notes/index"],

  events: {
    "click a.new-note-btn": "navigateToNewNote"
  },

  initialize: function(options) {
    this.options = options;

    return this.listenTo(this.collection, "reset", (function(_this) {
      return function() {
        return _this.render();
      };
    })(this));
  },

  render: function() {
    this.$el.html(this.template());

    this.collection.each((function(_this) {
      return function(note) {
        var view;
        view = new s.Notes.IndexItemView({
          model: note
        });
        return _this.$(".notes").append(view.render().el);
      };
    })(this));

    this.$("#note-menu");
    return this;
  },

  navigateToNewNote: function() {
    return Backbone.history.navigate("notes/new", true);
  }
});
