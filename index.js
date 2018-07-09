var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newthing = Object.assign({}, object);
  newthing[key] = value;
  return newthing;
}