Clover::Application.routes.draw do
  root :to => 'pages#home'
  match 'about', :to => 'pages#about'
  match 'services', :to => 'pages#services'
  match 'works', :to => 'pages#works'
  match 'gallery', :to => 'pages#gallery'
  match 'contact', :to => 'pages#contact'
  match 'blog', :to => 'pages#blog'
end
