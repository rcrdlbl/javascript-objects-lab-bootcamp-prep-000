var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = object.assign({}, obj);
  obj[key] = value;
}