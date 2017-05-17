require 'nokogiri'
require 'json'
require './define.rb'

def convert_ability(path)
  html = File.read(path)
  doc = Nokogiri::HTML.parse(html, nil, 'utf-8')
  ability = []

  doc.search('table').each_with_index do |table, i|
    case i
    when 0 # メインステータス
      next
    when 1 # 生命力とHP
      puts table
    when 2 # 集中力とFP

    when 3 # 記憶スロット数
      
    when 4 # 持久力とスタミナ

    when 5 # 体力と装備重量

    when 6 # 運と発見力

    when 7 # 技量による詠唱速度短縮

    when 8 # 防御力・耐性値

    end
  end
end


convert_ability("./html/abirity.html")

# File.write('../../json/abirity.json', equipments.to_json)
