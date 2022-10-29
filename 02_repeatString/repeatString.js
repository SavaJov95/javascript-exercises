let rec = "hey";

const repeatString = function(string, num) {
    for(i=1; i<num; i++) {
        rec += string;
    }
		return rec;
};

repeatString(rec, 3);

// Do not edit below this line
module.exports = repeatString;
