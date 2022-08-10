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



function getNextPalindrome(date)
{
    count = 0;
    theNextDate = nextDate(date);
    while(1){
        count = count + 1;
        if(checkPalindromeOnAll(theNextDate)){
            
            break;
        }else{
            theNextDate = nextDate(theNextDate);
        }
    }

    return [theNextDate, count];
    


}


function previousDate(date){
    var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var day = date.day - 1;
    var month = date.month;
    var year = date.year;

    if(month === 1){
        if(day<1){
            day = 31;
            month = 12;

            
            
            year = year -1
        }
    }if(month === 3){
        if(isLeapYear(year)){
            if(day < 1){
                day = 29;
                month = month - 1;
            }
            
        }else{
            if(day < 1){
                day = 28;
                month = month -1;
            }
        }

    }else{
        if(daysInMonths[month-2]===31){
            if(day<1){
                day = 31;
                month = month -1;

            }

            
        }
        if(daysInMonths[month-2]===30){
            if(day<1){
                day = 30;
                month = month -1;

            }
           
        }     
    }

    return {
        day:day,
        month:month,
        year:year
    };


}

function getPreviousPalindrome(date)
{
    count = 0;
    thePreviousDate = previousDate(date);
    while(1){
        count = count - 1;
        if(checkPalindromeOnAll(thePreviousDate)){
            
            break;
        }else{
            thePreviousDate = previousDate(thePreviousDate);
        }
    }

    return [thePreviousDate, count];
    


}

const inputBday = document.querySelector('#dateOfBirth');
const checkBtn = document.querySelector('#btn-check');


function clickHandler(e){
    if(inputBday.value !== ' '){
        var bdayString = inputBday.value;
    
    var elementsOfDate = bdayString.split('-');
   console.log(elementsOfDate);
    var date = {
        day: Number(elementsOfDate[2]),
        month: Number(elementsOfDate[1]),
        year: Number(elementsOfDate[0])
    };
    console.log(date);

    if(checkPalindromeOnAll(date)){
        console.log("your bday is a palindrome")
    }else{
        console.log(getNextPalindrome(date));
        console.log(getPreviousPalindrome(date));

    }
    }


    
}
checkBtn.addEventListener("click", clickHandler);
