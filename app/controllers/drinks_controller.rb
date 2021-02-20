class DrinksController < ApplicationController

    def create
        coffee = Coffee.find_by(id: params[:coffee_id])
        drink = coffee.drinks.build(drink_params)
        if drink.save
            render json: drink
        end
    end

    def index
        drinks = Coffee.find_by(id: params[:coffee_id]).drinks
        render json: drinks, except: [:created_at, :updated_at]
    end

   private

    def drink_params
        params.require(:drink).permit(:roast, :milk, :sweetener, :espresso, :id)
    end
end

