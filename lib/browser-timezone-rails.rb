require "browser-timezone-rails/engine"
require 'jquery-rails'
require 'jquery-cookie-rails'
require 'jstz-rails'

module BrowserTimezoneRails
  module TimezoneControllerSetup
    def self.included(base)
      base.send(:prepend_around_filter, :set_time_zone)
    end

    private

    def set_time_zone
      old_time_zone = Time.zone
      if current_user.try(:have_timezone?)
        Time.zone = current_user.timezone
      else
        Time.zone = browser_timezone if browser_timezone.present?
      end
      yield
    ensure
      Time.zone = old_time_zone
    end

    def browser_timezone
      cookies["browser.timezone"]
    end
  end

  class Railtie < Rails::Engine
    initializer "browser_timezone_rails.controller" do
      ActiveSupport.on_load(:action_controller) do
        include BrowserTimezoneRails::TimezoneControllerSetup
      end
    end
  end
end
