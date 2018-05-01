let convert = document.getElementById("convert");
let renew = document.getElementById("refresh");
convert.addEventListener("click", calculate);
renew.addEventListener("click", refresh);

/*************** Refresh Button ****************/
function refresh(){
    document.getElementById("binary").value = 0;
    document.getElementById("decimal").value = 0;
    document.getElementById("hexadecimal").value = 0;
}

/*************** Calculate Button **************/
function calculate(){
    let getBinary = document.getElementById("binary").value;
    let getDecimal = document.getElementById("decimal").value;
    let getHex = document.getElementById("hexadecimal").value;
    let hexUpperCase = getHex.toUpperCase()
    if(getBinary > 0){
        let x = toDecimal(getBinary);
        let y = toHexDecimal(getBinary);
        document.getElementById("decimal").value = x;
        document.getElementById("hexadecimal").value = y;
    } else if(getDecimal > 0){
        let x = toBinary(getDecimal);
        let y = toHexDecimal(x);
        document.getElementById("binary").value = x;
        document.getElementById("hexadecimal").value = y;
    } else if(hexUpperCase || hexUpperCase == ""){
        let x = hexToBinary(hexUpperCase);
        let y = toDecimal(x);
        document.getElementById("binary").value = x;
        document.getElementById("decimal").value = y;
    } else {"Invalid Number"};
}

/*************  Decimal to Binary *****************/
function toBinary(decimalNumber){
let reminder = 0;
let result = "";
while(decimalNumber > 0.5) {
	reminder = decimalNumber%2;
	decimalNumber = Math.floor(decimalNumber/2);
	result = result + reminder;
};

let splitIntoArray = result.split("");
let reverseArray = splitIntoArray.reverse();
let joinAnArray = reverseArray.join("");
return joinAnArray;
}

/************** Binary to Decimal ****************/
function toDecimal(binaryNumber){
let changeToArray = binaryNumber.split('');
let binaryLength = changeToArray.length;
let sum = 0;

for(i = 0; i <= (binaryLength-1); i++){
	for(y = (1+i); y <= (i + 1); y++){
        sum = sum + (Math.pow(2,i) * (changeToArray[binaryLength - y]));
    }
};
return sum;
}



/**************** Binary to Hexadecimal*************/
function toHexDecimal(binaryNumber){
    let binaryArray = binaryNumber.split("");
    let binaryLength = binaryArray.length;
    let result = "";
    let toHex ="";

    for(i = binaryLength; i >= 1; i = i-4) {
        let binarySaperate = [];
        let binaryReverse;
        let binaryJoin;
        let changeToNumber;
            for(j = 1; j<=4; j++){
                binarySaperate.push(binaryArray[i-j]);
            } //end of second for loop

            binaryReverse = binarySaperate.reverse();
            binaryJoin = binaryReverse.join("");
            changeToNumber = Number(binaryJoin);
                if(changeToNumber == 0){result = "0"}
				else if(changeToNumber == 1){result = "1"}
                else if(changeToNumber == 10){result = "2"}
                else if(changeToNumber == 11){result = "3"}
                else if(changeToNumber == 100){result = "4"}
                else if(changeToNumber == 101){result = "5"}
                else if(changeToNumber == 110){result = "6"}
                else if(changeToNumber == 111){result = "7"}
                else if(changeToNumber == 1000){result = "8"}
                else if(changeToNumber == 1001){result = "9"}
                else if(changeToNumber == 1010){result = "A"}
                else if(changeToNumber == 1011){result = "B"}
                else if(changeToNumber == 1100){result = "C"}
                else if(changeToNumber == 1101){result = "D"}
                else if(changeToNumber == 1110){result = "E"}
                else if(changeToNumber == 1111){result = "F"}
                else{"Please check your number again"};
            toHex = toHex + result;
    };// end first for loop
	 let splitArray = toHex.split("");
     splitArray.reverse();
	 return splitArray.join("");
    };

    /***************** Hexadecimal to Binary *************************/
    function hexToBinary(hexNumber){
        let splitToArray = hexNumber.split("");
        let lengthOfArray = splitToArray.length - 1;
        let convertToBinary = [];
        for(i = 0; i<=lengthOfArray; i++){
            if(splitToArray[i] == "1"){convertToBinary[i] = "0001"}
            else if(splitToArray[i] == "2"){convertToBinary[i] = "0010"}
            else if(splitToArray[i] == "3"){convertToBinary[i] = "0011"}
            else if(splitToArray[i] == "4"){convertToBinary[i] = "0100"}
            else if(splitToArray[i] == "5"){convertToBinary[i] = "0101"}
            else if(splitToArray[i] == "6"){convertToBinary[i] = "0110"}
            else if(splitToArray[i] == "7"){convertToBinary[i] = "0111"}
            else if(splitToArray[i] == "8"){convertToBinary[i] = "1000"}
            else if(splitToArray[i] == "9"){convertToBinary[i] = "1001"}
            else if(splitToArray[i] == "A"){convertToBinary[i] = "1010"}
            else if(splitToArray[i] == "B"){convertToBinary[i] = "1011"}
            else if(splitToArray[i] == "C"){convertToBinary[i] = "1100"}
            else if(splitToArray[i] == "D"){convertToBinary[i] = "1101"}
            else if(splitToArray[i] == "E"){convertToBinary[i] = "1110"}
            else if(splitToArray[i] == "F"){convertToBinary[i] = "1111"}
            else{"please check your number"};
        };
        return convertToBinary.join("");
    };

