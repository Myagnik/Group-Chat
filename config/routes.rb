Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'chatroom#index'
  get 'privatemessage', to: 'privatemessages#index'
  get 'accountsetting', to: 'accountsetting#index'
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'logout', to: 'sessions#destroy'
  get 'signup', to: 'users#new'
  post 'users', to: 'users#create'
  post 'message', to: 'messages#create'
  mount ActionCable.server, at: '/cable'
end
