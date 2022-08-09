function reverseString(string){
    var listOfCharacters = string.split('');
    var reverseOfCharacters = listOfCharacters.reverse('');
    var reverse = reverseOfCharacters.join('');
    return reverse; 

    

}

function isPalindrome(string){
    var reverse = reverseString(string);

    if (string === reverse){
        return true;
    }else{
        return false;
    }
}

function convertDateToString(date){
    dateStr = {day:'', month:'', year:''};

    if(date.day <10){
        dateStr.day = '0' + date.day;
    }else{
        dateStr.day = date.day.toString();
    }

    if(date.month <10){
        dateStr.month = '0' + date.month;
    }else{
        dateStr.month = date.month.toString();
    }

    dateStr.year = date.year.toString();

    return dateStr;



}

function possibleFormatsOfDate(date){
    dateStr = convertDateToString(date);

    ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    ddmmyy=dateStr.day + dateStr.month + dateStr.year.slice(-2);
    mmddyy=dateStr.month + dateStr.day + dateStr.year.slice(-2);
    yymmdd=dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy,  mmddyyyy,  yyyymmdd, ddmmyy,  mmddyy,  yymmdd];

}


function checkPalindromeOnAll(date){
    palindromeOrNot = false;

    allFormatsDates = possibleFormatsOfDate(date);

    for(i = 0; i<allFormatsDates.length; i++){
        if(isPalindrome(allFormatsDates[i])){
            palindromeOrNot = true;
            break;
        }
    }
    return palindromeOrNot;
}

function isLeapYear(year){

    

    
    if (year % 400 === 0) return true;

    if (year % 100 === 0) return false;
  
    if (year % 4 === 0) return true;
  
    return false;
    
}
 

var date = {
    day: 28,
    month: 2,
    year: 2001
};

function nextDate(date){
    var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    if(month === 2){
        if(isLeapYear(year)){
            if(day > 29){
                day = 1;
                month = month +1;
            }
            
        }else{
            if(day > 28){
                day = 1;
                month = month +1;
            }
        }

    }else{
        if(day > daysInMonths[month-1]){
            day = 1;
            month = month +1;
        }
        
    }

    if(month>12){
        year = year+1;
        month = 1;
    }

    return {
        day:day,
        month:month,
        year:year
    };


}

console.log(nextDate(date));
// function getNextPalindrome(){

// }

















