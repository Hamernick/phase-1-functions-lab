function distanceFromHqInBlocks(blocks) {
    if (blocks !== 42) {
        let userDistance = Math.abs(42 - blocks)
        return userDistance
    }
}

function distanceFromHqInFeet(ham) {
    let something = distanceFromHqInBlocks(ham);
    return something * 264
}


function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;

}

