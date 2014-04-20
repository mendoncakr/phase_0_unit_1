var sum = function (numLists) {
    totalSum = 0;
    for (var i = 0; i < numLists.length; i++) {
      totalSum += numLists[i];
    }
    return totalSum;
}

var mean = function (numLists) {
    totalSum = 0;
    for (var i = 0; i < numLists.length; i++) {
      totalSum += numLists[i];
    }
    return totalSum / numLists.length;
}

var median = function (numLists) {
    var currentNum = Math.floor(numLists.length / 2);
    if (numLists.length % 2 !== 0) {
    return numLists[currentNum]; 
    }

    else {
    var avgValue = (numLists[currentNum] + numLists[currentNum - 1]) /2;
    return avgValue;
    }
};
