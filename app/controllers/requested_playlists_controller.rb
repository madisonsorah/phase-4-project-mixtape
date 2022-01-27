class RequestedPlaylistsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        requestedplaylists = Playlist.all
        render json: requestedplaylists
    end

    def show
        requestedplaylist = find_requestedplaylist
        render json: requestedplaylist
    end

    def create
        requestedplaylist = Playlist.create!(requestedplaylist_params)
        render json: requestedplaylist, status: :created
    end

    def update
        requestedplaylist = find_requestedplaylist
        requestedplaylist.update!(requestedplaylist_params)
        render json: requestedplaylist
    end

    def destroy
        requestedplaylist = find_requestedplaylist
        requestedplaylist.destroy
        head :no_content
    end
    

    private
    def find_requestedplaylist
        Playlist.find(params[:id])
    end

    def requestedplaylist_params
        params.permit(:description, :requester_id)
    end

    def render_not_found_response
        render json: {error: "Playlist request not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
