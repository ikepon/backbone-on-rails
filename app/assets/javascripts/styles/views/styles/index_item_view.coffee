StyleSample.Views.Styles ?= {}

StyleSample.Views.Styles.IndexItemView = Backbone.View.extend
  tagName: "li"
  id: -> "style-#{@model.id}"
  className: "style"

  template: JST["styles/index_item"]

  events:
    "click a": "navigateToNote"

  render: ->
    context = @model.toJSON()
    _.extend(context, previewStyle: @model.previewStyle())
    @$el.html(@template(context))
    this

  navigateToNote: (e) ->
    e.preventDefault()
    Backbone.history.navigate("styles/#{@model.id}", true)
