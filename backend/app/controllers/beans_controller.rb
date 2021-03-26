class BeansController < ApplicationController
	def create
		bean = Bean.new(bean_params)

		if bean.save
			render json: BeanSerializer.new(bean).serializable_hash
		else
			render json: { error: bean.errors.full_messages.join(',')}, :status => 500
		end
	end

	private

	def bean_params
		params.require(:bean).permit(:name, :roast_level_id, :tasting_notes, :notes, :score)
	end
end