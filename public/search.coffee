highlight_word = (searchpara) ->
  text = document.getElementById('search_text').value
  if text
    pattern = new RegExp('(' + text + ')', 'gi')
    new_text = searchpara.replace(pattern, '<span class=\'highlight\'>' + text + '</span>')
    document.getElementById('data').innerHTML = new_text
  return

document.addEventListener 'DOMContentLoaded', (->
  searchpara = document.getElementById('data').innerHTML
  searchpara = searchpara.toString()

  document.getElementById('search').onclick = ->
    highlight_word searchpara
    return

  return
), false