function decimalToHex(value) {
    var v = value;
    var array = [];
    var remainder = v % 16;
    var division = Math.floor(v / 16);
    
    array.push(remainder);

    while(division >= 0) {
        if(division <= 0) {
            return array.reverse();
        } else {
            var next = Math.floor(division / 16);
            remainder = division % 16;
            division = next;
            array.push(remainder);
        };

    for (var i = 0; i <= array.length; i++) {
        if (array[i] > 9) {
            if (array[i] == 10) {
                array[i] = "A";
            };
            if (array[i] == 11) {
                array[i] = "B";
            };
            if (array[i] == 12) {
                array[i] = "C";
            };
            if (array[i] == 13) {
                array[i] = "D";
            };
            if (array[i] == 14) {
                array[i] = "E";
            };
            if (array[i] == 15) {
                array[i] = "F";
            };
        };
    };
};
};

console.log(decimalToHex(#value));
