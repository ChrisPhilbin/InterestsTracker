class Employee < ApplicationRecord
    has_many :interests
    has_many :pets
    has_many :sports

    mount_uploader :headshot, HeadshotUploader
end
