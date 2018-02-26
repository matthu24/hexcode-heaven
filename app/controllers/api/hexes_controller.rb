class Api::HexesController < ApplicationController

#   def index
#   currentUserId = current_user ? current_user.id : User.where("username = 'Guest'")[0].id
#   @custom_recipes = CustomRecipe.where("user_id=#{currentUserId}")
# end

  def index
    @hexes = Hex.all
  end

  def create
    @hex = Hex.new(hex_params)
    if @hex.save!
      render :show
    else
      render json: @hex.errors.full_messages
    end
  end

  def show
    @hex = Hex.find(params[:id])
  end

  def hex_params
    params.require(:hex).permit(:group_id,:color_id,:code)
  end
end
