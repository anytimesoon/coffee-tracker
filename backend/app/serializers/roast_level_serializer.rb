class RoastLevelSerializer
  include JSONAPI::Serializer
  attributes :name

  has_many :beans
end
