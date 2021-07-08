class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "/api/users/show"
      #render :show ?
    else
      render json: ["Invalid credentials"], status: 422
    end
  end

  def index 
    @users = User.all
    render "/api/users"
    #render :index?
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
