

fetch('https://api.spoonacular.com/recipes/search?apiKey=db254b5cd61744d39a2deebd9c361444&number=1&query=pizza')
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log('ERROR'))