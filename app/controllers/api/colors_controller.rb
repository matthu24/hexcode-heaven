class Api::ColorsController < ApplicationController

    def create
      @color = Color.new(color_params)
      if @color.save!
        render :show
      else
        render json: @color.errors.full_messages
      end
    end

    def show
      @color = Color.find(params[:id])
    end


    def color_params
      params.require(:color).permit(:name)
    end




end
