class Drink < ApplicationRecord
    has_many :ingredients, as: :itemable
    # added for test
end
