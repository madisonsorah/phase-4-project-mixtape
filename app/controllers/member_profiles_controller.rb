class MemberProfilesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def show
        memberprofile = find_memberprofile
        render json: memberprofile
    end

    def create
        memberprofile = MemberProfile.create!(memberprofile_params)
        render json: memberprofile, status: :created
    end

    def update
        memberprofile = find_memberprofile
        memberprofile.update!(memberprofile_params)
        render json: memberprofile
    end

    def destroy
        memberprofile = find_memberprofile
        memberprofile.destroy
        head :no_content
    end

    private
    def find_memberprofile
        MemberProfile.find(params[:id])
    end

    def memberprofile_params
        params.permit(:bio, :avatar_url)
    end

    def render_not_found_response
        render json: {error: "Member profile not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
