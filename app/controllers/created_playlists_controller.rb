class CreatedPlaylistsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        createdplaylists = Playlist.where.not(creator_id: nil)
        render json: createdplaylists
    end

    def show
        createdplaylist = find_createdplaylist
        render json: createdplaylist
    end

     # def mycreatedplaylists
    #     mycreatedplaylists = Playlist.where(creator_id: params[:creator_id])
    #     render json: myplaylists
    # end

    def update
        createdplaylist = find_createdplaylist
        createdplaylist.update!(createdplaylist_params)
        render json: createdplaylist
    end

    def destroy
        createdplaylist = find_createdplaylist
        createdplaylist.destroy
        head :no_content
    end
    

    private
    def find_createdplaylist
        createdplaylists = Playlist.where.not(creator_id: nil)
        createdplaylists.find(params[:id])
    end

    def createdplaylist_params
        params.permit(:title, :cover_url, :playlist_url, :creator_id)
    end

    def render_not_found_response
        render json: {error: "Created playlist not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
