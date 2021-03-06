Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resources :stories, only: [:create, :show, :index, :destroy, :update]
    resource :session, only: [:create, :destroy, :show, :new]
    resources :responses, only: [:create, :show, :update, :index, :destroy]
    resources :likes 
  end

  root to: "static_pages#root"
end

