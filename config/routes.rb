Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  resources :members, only: [:index, :show, :create, :destroy]
  resources :member_profiles, only: [:show, :create, :update, :destroy]
  resources :playlists, only: [:index, :show, :create, :update, :destroy]
  resources :playlist_requests, only: [:index, :show, :create, :destroy]

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
