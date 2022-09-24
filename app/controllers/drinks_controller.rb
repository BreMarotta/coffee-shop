class DrinksController < ApplicationController 

    skip_before_action :authorize, only: :index

    def index
        render json: Drink.all, status: :ok
    end

    def create 
        new_drink = Drink.create!(drink_params)
        render json: new_drink, status: :created
    end

    def update

    end

    def delete
    
    end

    private

    def drink_params
        params.require(:drink).permit(:name, :description, :img, :notes, :active)
    end

end