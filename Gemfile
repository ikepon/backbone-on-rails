source 'https://rubygems.org'

gem 'rails', '4.2.4'
gem 'haml-rails'
gem 'bootstrap-sass', '~> 3.3.5'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.1.0'
gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'
gem 'bcrypt-ruby', require: 'bcrypt'

gem 'handlebars_assets'
gem 'redcarpet'

source 'https://rails-assets.org' do
  gem 'rails-assets-lodash'
  gem 'rails-assets-backbone'
  gem 'rails-assets-backbone.stickit'
  gem 'rails-assets-highlightjs'
  gem 'rails-assets-notifyjs'
end

gem 'autoprefixer-rails'

group :development, :test do
  gem 'sqlite3'
  gem 'rspec-rails'
  gem 'factory_girl_rails'
  gem 'thin', require: false
end

group :production, :staging do
  gem 'therubyracer'
end

group :development do
  gem 'erb2haml'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'pry', group: :test
  gem 'pry-rails'
  gem 'spring'
end

