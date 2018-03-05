module.exports = function getZerosCount(number, base) {
    
    var count = 0,
        zerosCount = number;

    for (var i = 2; i <= base; i++) {

        if (base % i === 0) {
            count = 0;

            while (base % i === 0) {
                count = count + 1;
                base = base / i;
            }

        var count1 = 0;
        var count2 = number / i;

        while (count2 > 0) {
            count1 = count1 + count2;
            count2 = Math.floor(count2 / i);
        }
            zerosCount = Math.min(zerosCount, Math.floor(count1 / count));
        }
    }
    return zerosCount;
}
