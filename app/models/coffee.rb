class Coffee < ApplicationRecord
    has_many :drinks
    validates :name, presence: true
    validates :img_url, presence: true
end
