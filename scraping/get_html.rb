require 'open-uri'
require 'uri'
require './define.rb'

EQUIPMENT.each_pair do |category, weapons|
  weapons.each_pair do |name_en, name_ja|
    url = URI.escape(URL + name_ja)
    puts name_ja
    open(url) do |f|
      File.write("./html/#{name_en}.html", f.read)
    end
  end
end

