class SessionsController < ApplicationController
  def create
    member = Member.find_by(username: params[:username])
      if member&.authenticate(params[:password])
        session[:member_id] = member.id
        render json: member, status: :created
      else
        render json: { error: "Invalid username or password" }, status: :unauthorized
      end
  end
    
  def destroy
    session.delete :member_id
    head :no_content
  end
end
