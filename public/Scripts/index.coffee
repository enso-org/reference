# Get a random integer from 1 to 10 inclusive
num = Math.ceil(Math.random() * 10)
gnum = prompt('Guess the number between 1 and 10 inclusive')
if gnum == num
  console.log 'Matched'
else
  console.log 'Not matched, the number was ' + num