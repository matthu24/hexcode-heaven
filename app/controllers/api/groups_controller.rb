class Api::GroupsController < ApplicationController


  def create
    @group = Group.new(group_params)
    if @group.save!
      render :show
    else
      render json: @group.errors.full_messages
    end
  end

  def show
    @group = Group.find(params[:id])
  end


  def group_params
    params.require(:group).permit(:name)
  end




end
