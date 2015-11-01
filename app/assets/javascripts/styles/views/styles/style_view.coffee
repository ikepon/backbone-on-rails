StyleSample.Views.Styles ?= {}

StyleSample.Views.Styles.StyleView = Backbone.View.extend
  className: "new-style"

  template: JST["styles/style"]

  events:
    "click .submit-style-form": "submit"

  bindings:
    ".radio-category": "category"
    "#input-style-title": "title"
    "#input-style": "style"


  render: ->
    console.log @model
    context = @model.toJSON()
    # TODO とりあえず動いた。あとでこの方法は見直す
    selections = ['ボタン', '見出し', 'パラグラフ', 'インプット']
    _.extend(context, selections: selections)
    @$el.html(@template(context))
    $("#styles-main").html(@el)
    @stickit()
    this

  submit: (e) ->
    e.preventDefault()
    @trigger("clickSubmit")
