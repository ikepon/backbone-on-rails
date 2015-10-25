StyleSample.Views.Styles ?= {}

StyleSample.Views.Styles.NewButtonView = Backbone.View.extend
  className: "new-button-block"

  template: JST["styles/new_button"]

  events:
    "click a": "navigateToNewStyle"

  render: ->
    @$el.html(@template())
    this

  navigateToNewStyle: ->
    Backbone.history.navigate("styles/new", true)
