class RoastLevelsController < ApplicationController
	def index
		roast_levels = RoastLevel.all

		render json: RoastLevelSerializer.new(roast_levels).serializable_hash
	end

	def show
		roast_level = RoastLevel.find(params[:id])
		options = {include: [:beans]}

		render json: RoastLevelSerializer.new(roast_level, options).serializable_hash
	end
end