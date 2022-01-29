Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # route to test your configuration

  # Member login
  post "/login", to: "sessions#create"

  # Member logout
  delete "/logout", to: "sessions#destroy"

  # Current logged in member
  get "/me", to: "members#currentmember"

  # Playlist requests that belong to a specific member
  get '/members/:requester_id/requested_playlists', to: 'requested_playlists#myrequestedplaylists'

  # Received playlists that belong to a specific member
  get '/members/:requester_id/received_playlists', to: 'created_playlists#myreceivedplaylists'

  # Created playlists that belong to a specific member
  get '/members/:creator_id/created_playlists', to: 'created_playlists#mycreatedplaylists'

  # Member CRUD actions
  resources :members, only: [:index, :show, :create, :update, :destroy]

  # Playlist request CRUD actions/PATCH for playlist submit
  resources :requested_playlists, only: [:index, :show, :create, :update, :destroy]

  # Created playlist CRUD actions
  resources :created_playlists, only: [:index, :show, :update, :destroy]

  # Fallback
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
