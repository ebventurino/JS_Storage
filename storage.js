const HomeInventoryDatabase = {}

HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []


const vintageInkwell = {
  name: "Vintage Ink Well",
  location: "Writing desk",
  description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
}

const writingDesk = {
  name: "Shaker Writing Desk",
  location: "Bedroom",
  description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}

const bed = {
  name: "Bed",
  location: "Bedroom",
  description: "Where I get lots of sleep"
}

const pillow = {
  name: "pillow",
  location: "Bedroom",
  description: "I sleep on this"
}

const tv = {
  name: "tv",
  location: "electronics",
  description: "Where I watch movies"
}
const journal = {
  name: "journal",
  location: "Crafts",
  description: "Where I write my thoughts"
}
const sketchbook = {
  name: "sketchbook",
  location: "Crafts",
  description: "Where I draw my thoughts"
}
const easel = {
  name: "easel",
  location: "furniture",
  description: "Where I create my paintings"
}

const paintings = {
  name: "paintings",
  location: "crafts",
  description: "Where I create"
}
const books = {
  name: "books",
  location: "crafts",
  description: "Where I learn"
}

HomeInventoryDatabase.crafts.push(vintageInkwell)
HomeInventoryDatabase.furniture.push(writingDesk)
HomeInventoryDatabase.furniture.push(bed)
HomeInventoryDatabase.furniture.push(pillow)
HomeInventoryDatabase.electronics.push(tv)
HomeInventoryDatabase.crafts.push(journal)
HomeInventoryDatabase.crafts.push(sketchbook)
HomeInventoryDatabase.furniture.push(easel)
HomeInventoryDatabase.crafts.push(paintings)
HomeInventoryDatabase.crafts.push(books)


const saveDatabase = function (databaseObject, localStorageKey) {

  const stringifiedDatabase = JSON.stringify(databaseObject)
  console.log(stringifiedDatabase)
  localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(HomeInventoryDatabase, "homeInventory");

const loadDatabase = function (localStorageKey) {
  // Get the string version of the database
const databaseString = localStorage.getItem(localStorageKey)
console.log(databaseString, "getting from local storage")
//   // Use JSON.parse() to convert the string back into an object
return JSON.parse(databaseString)
}
const database = loadDatabase("homeInventory");
console.log(database)