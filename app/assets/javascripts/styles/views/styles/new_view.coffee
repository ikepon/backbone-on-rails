StyleSample.Views.Styles ?= {}

StyleSample.Views.Styles.NewView = Backbone.View.extend
  className: "new-style"

  template: JST["styles/new"]

  render: ->
    @$el.html(@template(@model.toJSON()))
    $("#styles-main").html(@el)
    this
