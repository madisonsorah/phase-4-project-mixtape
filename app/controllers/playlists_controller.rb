class PlaylistsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        playlists = Playlist.all
        render json: playlists
    end

    def show
        playlist = find_playlist
        render json: playlist
    end

    def create
        playlist = Playlist.create!(playlist_params)
        render json: playlist, status: :created
    end

    def update
        playlist = find_playlist
        playlist.update!(playlist_params)
        render json: playlist
    end

    def destroy
        playlist = find_playlist
        playlist.destroy
        head :no_content
    end
    

    private
    def find_playlist
        Playlist.find(params[:id])
    end

    def playlist_params
        params.permit(:title, :cover_url, :playlist_url)
    end

    def render_not_found_response
        render json: {error: "Playlist not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
