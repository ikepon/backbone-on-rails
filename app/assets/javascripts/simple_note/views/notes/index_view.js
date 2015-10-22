var  s;

s = this.SimpleNote;

if (s.Notes == null) {
  s.Notes = {};
}

s.Notes.IndexView = Backbone.View.extend({
  tagName: 'ul',
  id: 'notes',

  initialize: function(options) {
    this.options = options;

    return this.listenTo(this.collection, "reset", (function(_this) {
      return function() {
        return _this.render();
      };
    })(this));
  },

  render: function() {
    this.collection.each((function(_this) {
      return function(note) {
        var view;
        view = new s.Notes.IndexItemView({
          model: note
        });
        return _this.$el.append(view.render().el);
      };
    })(this));

    $("#main").html(this.el);

    var newButtonView;

    newButtonView = new s.Notes.NewButtonView();

    $("#main").prepend(newButtonView.render().el);

    return this;
  }
});
