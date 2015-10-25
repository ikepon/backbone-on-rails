json.array!(@styles) do |style|
  json.extract! style, :id, :title, :category, :style
  json.url style_url(style, format: :json)
end
