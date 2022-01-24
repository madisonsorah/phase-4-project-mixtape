class PlaylistRequestsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        playlistrequests = PlaylistRequest.all
        render json: playlistrequests
    end

    def show
        playlistrequest = find_playlistrequest
        render json: playlistrequest
    end

    def create
        playlistrequest = PlaylistRequest.create!(playlistrequest_params)
        render json: playlistrequest, status: :created
    end

    def destroy
        playlistrequest = find_playlistrequest
        playlistrequest.destroy
        head :no_content
    end

    private
    def find_playlistrequest
        PlaylistRequest.find(params[:id])
    end

    def playlistrequest_params
        params.permit(:description, :member_id)
    end

    def render_not_found_response
        render json: {error: "Playlist request not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
