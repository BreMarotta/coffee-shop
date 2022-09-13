class Ingredient < ApplicationRecord
    belongs_to :itemable, :polymorphic => true
end
