class CoffeesController < ApplicationController

    def index
        coffees = Coffee.all
        render json: coffees, only: [:id, :name, :img_url]
    end

    def show
        coffee = Coffee.find_by(id: params[:id])
        if coffee
            render json: { id: coffee.id, name: coffee.name, img_url: coffee.img_url }
        else
            render rson: {message: 'Coffee drink not found'}
        end
    end
end
