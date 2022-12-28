const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching (array, name) {
    return array.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch (array, letters) {
    return array.filter(driver => driver.startsWith(letters) )
}

function matchName (arrayOfObjects, name) {
    return arrayOfObjects.filter(driver => driver.name === name)
}