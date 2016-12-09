require 'open-uri'
require 'nokogiri'
require 'uri'

url = URI.escape('http://kamikouryaku.net/darksouls3/?短剣')

charset = nil

html = open(url) do |f|
  charset = f.charset
  f.read
end

doc = Nokogiri::HTML.parse(html, nil, charset)

doc.search('table').each do |table|
  ths = table.search('th').to_a
  tds = table.search('td').to_a
  tds.slice!(0...23)
  tds.each_slice(30) do |elem|
    name = ths.shift.text
    e = elem.map {|e| e.text }
    weapon = {
      name: name,
      power: [e[0], e[1], e[2], e[3], e[4]],
      cut: [e[17], e[18], e[19], e[20], e[21]],
      timei: e[5],
      uketi: e[22],
      mai: e[6],
      effect: [e[7], e[8], e[9]],
      hosei: [e[10], e[11], e[12], e[13]],
      need: [e[23], e[24], e[25], e[26]],
      sengi: e[14],
      fp: e[27],
      weight: e[15],
      taikyu: e[28],
      kyouka: e[16],
    }
    p weapon
  end
end

