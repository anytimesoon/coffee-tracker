class Bean < ApplicationRecord
	belongs_to :roast_level

	validates_presence_of :name, :tasting_notes, :score
end
