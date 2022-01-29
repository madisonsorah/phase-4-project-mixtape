class MembersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        members = Member.all
        render json: members
    end

    def show
        member = find_member
        render json: member
    end

    def currentmember
        member = Member.find_by(id: session[:member_id])
        if member
            render json: member
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        member = Member.create(member_params)
        if member.valid?
          render json: member, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

    def update
        member = find_member
        member.update!(member_params)
        render json: member
    end

    def destroy
        member = find_member
        member.destroy
        head :no_content
    end

    private
    def find_member
        Member.find(params[:id])
    end

    def member_params
        params.permit(:first_name, :last_name, :username, :email, :password, :bio, :avatar_url)
    end

    def render_not_found_response
        render json: {error: "Member not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
