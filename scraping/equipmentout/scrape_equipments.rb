require 'nokogiri'
require 'json'
require './define.rb'

def convert_equipments(path)
  html = File.read(path)
  doc = Nokogiri::HTML.parse(html, nil, 'utf-8')
  weapons = []

  doc.search('table').each do |table|
    trs = table.search('tr')
    pos = 2 # 最初の2行は表題なので無視
    num = (trs.size - pos) / 3 # trが3つで1セット

    num.times do
      elem = trs[pos...(pos+3)]
      name = elem.search('th').text
      e = elem.search('td').map {|t| t.text }

      e.delete_at(23) if e.size == 31  # 触媒系は理信99の場合の魔威のcolumnが存在するが無視
      e.insert(6, '-') if e.size == 29 # 盾系は魔威のcolumn自体が存在しないので追加
      next unless e.size == 30         # この時点でcolumn数が30で無いものは武器ではないので無視

      weapon = {
        name: name,
        damage: [e[0], e[1], e[2], e[3], e[4]],
        damage_reduction: [e[17], e[18], e[19], e[20], e[21]],
        critical_damage: e[5],
        stability: e[22],
        # spell_buff: e[6],
        aux_effect: [e[7], e[8], e[9]],
        bonuses: [e[10], e[11], e[12], e[13]],
        requirements: [e[23], e[24], e[25], e[26]],
        skill: e[14],
        skill_fp_cost: e[27],
        weight: e[15],
        durability: e[28],
        strengthening: e[16]
      }
      weapons << weapon
      pos += 3
    end
  end
  weapons
end

equipments = {}

EQUIPMENT.each_pair do |category, weapons|
  next if category == :armor # 防具は現在未対応
  equipment = {}
  equipments[category] = weapons.map.with_object(equipment) do |(name_en, name_ja), equipment|
    puts name_ja
    equipment[name_en] = convert_equipments("./html/#{name_en}.html")
  end
end

File.write('../../json/equipments.json', equipments.to_json)
