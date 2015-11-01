StyleSample.Models.Style = Backbone.Model.extend
  urlRoot: '/styles'

  previewStyle: (length = 140) ->
    @get("body").substring(0, length)
