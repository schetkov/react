Rails.application.routes.draw do

  resources :users
  resources :sessions

  get '/signup', to: 'users#new', as: 'signup'
  get '/login', to: 'sessions#new', as: 'login'
  get '/logout', to: 'sessions#destroy', as: 'logout'



  root to: 'react_app#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
