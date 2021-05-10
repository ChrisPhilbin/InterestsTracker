Rails.application.routes.draw do
  resources :employees do
    resources :interests
    resources :pets
  end
end
