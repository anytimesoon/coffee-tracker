class BeanSerializer
  include JSONAPI::Serializer
  attributes :name, :tasting_notes, :score, :notes

  belongs_to :roast_level

  attribute :roast_level do |bean|
  	bean.roast_level.name
  end
end
