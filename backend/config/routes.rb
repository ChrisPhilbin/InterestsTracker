Rails.application.routes.draw do
  resources :employees do
    resources :interests
  end
end
