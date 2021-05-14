Rails.application.routes.draw do
  resources :employees do
    resources :interests
    resources :pets
    resources :sports
    resources :notes
  end
end
