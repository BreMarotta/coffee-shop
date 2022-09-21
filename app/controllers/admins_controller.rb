class AdminsController < ApplicationController
    
    def create 
        admin = Admin.create!(admin_params)
        session[:admin_id] = admin.ingredients
        render json: admin, status: :created
    end

    def show
        admin = Admin.find_by(id: session[:admin_id])
        render json: admin
    end

    private

    def admin_params
        params.require(:admin).permit(:username, :password, :password_confirmation)
    end
    
end