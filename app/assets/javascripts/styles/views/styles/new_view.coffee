StyleSample.Views.Styles ?= {}

StyleSample.Views.Styles.NewView = Backbone.View.extend
  className: "new-style"

  template: JST["styles/new"]

  bindings:
    ".radio-category": "category"
    "#input-style-title": "title"
    "#input-style": "style"


  render: ->
    context = @model.toJSON()
    # TODO とりあえず動いた。あとでこの方法は見直す
    selections = ['ボタン', '見出し', 'パラグラフ', 'インプット']
    _.extend(context, selections: selections)
    @$el.html(@template(context))
    $("#styles-main").html(@el)
    @stickit()
    this
