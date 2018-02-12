var recipes = new Object()

function destructivelyupdateObjectWithKeyAndValue(recipe, key, value){
  recipe[key] = value
  return recipe
}
