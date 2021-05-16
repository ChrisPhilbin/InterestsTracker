Rails.application.routes.draw do
  resources :employees do
    get '/newsfeed', to: 'employees#newsfeed'
    resources :interests
    resources :pets
    resources :sports
    resources :notes
  end
end
