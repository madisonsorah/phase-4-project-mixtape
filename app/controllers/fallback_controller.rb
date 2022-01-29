class FallbackController < ApplicationController
  def index
    ender file: 'public/index.html'
  end
end
