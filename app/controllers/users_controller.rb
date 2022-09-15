class UsersController < ApplicationController
    
    def create 
        user = User.create!(user_params)
        session[:user_id] = user.ingredients
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[Luser_id])
        render json: User
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end
    
end