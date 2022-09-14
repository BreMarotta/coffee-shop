class Drink < ApplicationRecord
    has_many :ingredients, as: :itemable
end
