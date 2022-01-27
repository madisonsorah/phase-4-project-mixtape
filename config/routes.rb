Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # route to test your configuration
  get '/hello', to: 'application#hello_world'
  # get '/members/:id/requests', to 'requested_playlists#myrequestedplaylists'

  resources :members, only: [:index, :show, :create, :update, :destroy]
  resources :requested_playlists, only: [:index, :show, :create, :update, :destroy]
  resources :created_playlists, only: [:index, :show, :update, :destroy]

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
