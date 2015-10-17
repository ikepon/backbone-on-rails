var base, s;

s = this.SimpleNote;

if ((base = s.Views).Notes == null) {
  base.Notes = {};
}

s.Views.Notes.IndexView = Backbone.View.extend({
  template: HandlebarsTemplates['notes/index'],
  events: {
    'click a.new-note-btn': 'navigateToNewNote'
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
        view = new s.Views.Notes.IndexItemView({
          model: note
        });
        return _this.$(".notes").append(view.render().el);
      };
    })(this));
    this.$("#note-menu");
    return this;
  },
  navigateToNewNote: function() {
    return Backbone.history.navigate('notes/new', true);
  }
});
