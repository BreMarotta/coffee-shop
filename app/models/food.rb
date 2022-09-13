class Food < ApplicationRecord
    has_many :ingredients, as: :itemable
end
