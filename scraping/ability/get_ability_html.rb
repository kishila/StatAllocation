require 'open-uri'
require 'uri'
require './define.rb'

name = "abirity"

puts name
open(URL) do |f|
  File.write("./html/#{name}.html", f.read)
end
