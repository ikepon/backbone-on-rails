StyleSample.Views.Styles ?= {}

StyleSample.Views.Styles.IndexItemView = Backbone.View.extend
  tagName: "li"
  id: -> "style-#{@model.id}"
  className: "style"

  template: JST["styles/index_item"]

  events:
    "click a": "navigateToNote"

  render: ->
    @$el.html(@template(@model.toJSON()))
    this

  navigateToNote: (e) ->
    e.preventDefault()
    Backbone.history.navigate("styles/#{@model.id}", true)
