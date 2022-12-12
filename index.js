// Code your solution in this file!



function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(42 - pickupLocation)
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    let feetTravelled = distanceTravelledInFeet(start,destination)
    if (feetTravelled < 400) {
        return 0
    }
    if (feetTravelled > 2500) {
        return 'cannot travel that far'
    }
    if (feetTravelled > 2000) {
        if (feetTravelled < 2500) {
            return 25
        }
    }

    return (distanceTravelledInFeet(start,destination) - 400) * 0.02
}