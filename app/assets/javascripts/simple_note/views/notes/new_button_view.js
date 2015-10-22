var s;

s = this.SimpleNote;

s.Notes.NewButtonView = Backbone.View.extend({
  className: "new-button-block",

  template: JST["notes/new_button"],

  events: {
    "click a": "navigateToNote"
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  navigateToNote: function() {
    return Backbone.history.navigate("notes/new", true);
  }
});
