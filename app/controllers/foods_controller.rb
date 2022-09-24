class FoodsController < ApplicationController 

    skip_before_action :authorize, only: :index

    def index
        render json: Food.all, status: :ok
    end

    def create 
        new_food = Food.create!(food_params)
        render json: new_food, status: :created
    end

    def update

    end

    def delete
    
    end

    private
    
    def food_params
        params.require(:food).permit(:name, :description, :img, :notes, :active)
    end

end