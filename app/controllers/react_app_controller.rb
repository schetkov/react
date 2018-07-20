class ReactAppController < ApplicationController
  layout "chat"

  def index
    @store_init_props = {
      user: current_user,
      some_key: "some_value",
    }
    @auth_props = {}
  end

end