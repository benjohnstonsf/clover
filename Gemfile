source 'https://rubygems.org'

gem 'rails', '3.2.5'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

gem 'sqlite3'
gem "haml", "~> 3.1.4" # markup haiku (http://haml-lang.com/)
gem "haml-rails", "~> 0.3.4" # Haml-rails provides Haml generators for Rails 3.
gem "sass", "~> 3.1.15" # Syntactically Awesome Stylesheets (http://sass-lang.com/)
gem 'heroku'


# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'

group :production, :staging do
  gem "pg"
  gem 'thin'
end

group :development, :test do
  gem "sqlite3-ruby", :require => "sqlite3"
end

# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'debugger'
