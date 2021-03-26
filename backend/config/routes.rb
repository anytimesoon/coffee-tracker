Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'roast_levels#index'
  resources :roast_levels, only: [:show]
end
