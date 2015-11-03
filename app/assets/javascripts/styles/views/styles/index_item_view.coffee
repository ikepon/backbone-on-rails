StyleSample.Views.Styles ?= {}

StyleSample.Views.Styles.IndexItemView = Backbone.View.extend
  tagName: "li"
  id: -> "style-#{@model.id}"
  className: "style"

  template: JST["styles/index_item"]

  events:
    "click .style-title": "navigateToStyle"
    "click .delete-style": "deleteStyle"

  initialize: ->
    @listenTo @model, "destroy", =>
      @remove()

  render: ->
    context = @model.toJSON()
    _.extend(context, previewStyle: @model.previewStyle())
    @$el.html(@template(context))
    this

  navigateToStyle: (e) ->
    e.preventDefault()
    Backbone.history.navigate("styles/#{@model.id}", true)

  deleteStyle: (e) ->
    e.preventDefault()

    if confirm("スタイルを削除しますか？")
        @model.destroy()
