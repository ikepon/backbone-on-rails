StyleSample.Views.Styles ?= {}

StyleSample.Views.Styles.IndexView = Backbone.View.extend
  tagName: "ul"
  id: "styles"

  initialize: (@options) ->
    @listenTo @collection, "reset", =>
      @render()

  render: ->
    @collection.each (style) =>
      view = new StyleSample.Views.Styles.IndexItemView(model: style)
      @$el.append(view.render().el)
    $("#styles-main").html(@el)
    newButtonView = new StyleSample.Views.Styles.NewButtonView()
    $("#styles-main").prepend(newButtonView.render().el)
    this

