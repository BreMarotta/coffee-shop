class Drink < ApplicationRecord
    has_many :ingredients, as: :itemable
    # added to test github
end
