var recipes = new Object()

function updateObjectWithKeyAndValue(recipe,key,value){
  var new_obj = Object.assign({},recipe)
  new_obj[key] = value
  return new_obj
  
}
function destructivelyUpdateObjectWithKeyAndValue(recipe, key, value){
  recipe[key] = value
  return recipe
}

function deleteFromObjectByKey(object,key){
  
}