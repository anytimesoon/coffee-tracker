class BeanSerializer
  include JSONAPI::Serializer
  attributes :name, :tasting_notes, :score

  belongs_to :roast_level
end
