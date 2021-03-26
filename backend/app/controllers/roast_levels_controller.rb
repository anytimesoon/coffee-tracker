class RoastLevelsController < ApplicationController
	def index
		roast_levels = RoastLevel.all

		render json: RoastLevelSerializer.new(roast_levels).serializable_hash
	end
end