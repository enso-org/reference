CreateTableFromJSON = ->
  `var i`
  `var i`
  myBooks = [
    {
      'Book ID': '1'
      'Book Name': 'Computer Architecture'
      'Category': 'Computers'
      'Price': '125.60'
    }
    {
      'Book ID': '2'
      'Book Name': 'Asp.Net 4 Blue Book'
      'Category': 'Programming'
      'Price': '56.00'
    }
    {
      'Book ID': '3'
      'Book Name': 'Popular Science'
      'Category': 'Science'
      'Price': '210.40'
    }
  ]
  # EXTRACT VALUE FOR HTML HEADER. 
  # ('Book ID', 'Book Name', 'Category' and 'Price')
  col = []
  i = 0
  while i < myBooks.length
    for key of myBooks[i]
      if col.indexOf(key) == -1
        col.push key
    i++
  # CREATE DYNAMIC TABLE.
  table = document.createElement('table')
  # CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
  tr = table.insertRow(-1)
  # TABLE ROW.
  i = 0
  while i < col.length
    th = document.createElement('th')
    # TABLE HEADER.
    th.innerHTML = col[i]
    tr.appendChild th
    i++
  # ADD JSON DATA TO THE TABLE AS ROWS.
  i = 0
  while i < myBooks.length
    tr = table.insertRow(-1)
    j = 0
    while j < col.length
      tabCell = tr.insertCell(-1)
      tabCell.innerHTML = myBooks[i][col[j]]
      j++
    i++
  # FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
  divContainer = document.getElementById('1')
  divContainer.innerHTML = ''
  divContainer.appendChild table
  return

