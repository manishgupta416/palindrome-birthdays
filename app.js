const inputDate = document.querySelector("#input-date")
const showBtn = document.querySelector(".btn")
const showOutput = document.querySelector(".output")

showBtn.addEventListener("click" , clickHandler)

function clickHandler() {
    var bdayStr = inputDate.value
    if(bdayStr !== '') {
        var listOfDate = bdayStr.split('-')
        var date = {
            day: Number(listOfDate[2]),
            month:Number(listOfDate[1]),
            year:Number(listOfDate[0])
        }
        var isPalindrome = checkPalindromeForAllDateFormats(date)
        if(isPalindrome) {
            showOutput.innerText = "YaY Your birthday is Palindrome 🥳🥳"
        }else{
            var [count , nextDate] = getNextPalindromeDate(date)
            showOutput.innerText = `You missed by ${count} days and your nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year} ` 

        }
       
    } else{
        showOutput.innerText = "Please Enter your birthday date"
    }
}


var date = {
    day:1,
    month:12,
    year:2020
}

function reverseString(str) {
    var listOfChars = str.split('') 
    var reversedListOfChars = listOfChars.reverse()
    var reversedString = reversedListOfChars.join('')
    return reversedString;

}
// console.log(reverseStr('manish'))


function isPalindrome(str) {
    var reverse = reverseString(str)
    return str === reverse

}

// console.log(isPalindrome('242'))
// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('lol'))


function convertDateToStr(date) {
    var dateStr = {day:'' , month:'' ,year:''}

    if(date.day < 10) {
        dateStr.day = '0' + date.day
    } else{
        dateStr.day = date.day.toString()
    }

    if(date.month < 10) {
        dateStr.month = '0' + date.month
    } else{
        dateStr.month = date.month.toString()
    }

    dateStr.year = date.year.toString()

    return dateStr

}

console.log(convertDateToStr(date))


function getAllDateFormats(date) {
    var dateStr = convertDateToStr(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2)
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2)
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day

    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd]
}

function checkPalindromeForAllDateFormats(date) {
    var listOfPalindrome = getAllDateFormats(date)
    var flag = false
    for(var i=0 ; i<listOfPalindrome.length ; i++) {
        if(isPalindrome(listOfPalindrome[i])) {
            flag = true
            break
        }
    }
    return flag
}


console.log(getAllDateFormats(date))
console.log(checkPalindromeForAllDateFormats(date))

function isLeapYear (year) {
    if(year % 400 === 0) {
        return true;
    }
    if(year % 100 === 0) {
        return false
    }
    if(year % 4 === 0) {
        return true
    }
    return false

}
console.log(isLeapYear(2020))

function getNextDate (date) {
    var day = date.day + 1;
    var month = date.month 
    var year = date.year
    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]

    if( month === 2) {
        //check for leap year
        if(isLeapYear(year)) {

            if(day > 29) {
                day = 1
                month++
            } 
        }else{
                if(day>28) {
                    day=1;
                    month++
                }
            }
    }

    else{
        if(day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
    }

    if(month > 12) {
        month= 1;
        year++
    }
     return {
        day:day,
        month:month,
        year:year

     }
}

// var date2 = {
//     day:5,
//     month:2,
//     year:2020
// }

console.log(getNextDate(date))


// function getpreviousDate (date) {
//      var day = date.day-1
//      var month = date.month
//      var year = date.year
//      var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]

//      if(month == 2) {

//      } else{
//         d
//      }
// }



function getNextPalindromeDate (date) {
        var count = 0;
        var nextDate = getNextDate(date)
        while(1){
            count++;
            var isPalindrome = checkPalindromeForAllDateFormats(nextDate)
            if(isPalindrome) {
                break;

            } 
            nextDate = getNextDate(nextDate)

        }
        return [count,nextDate]
}

console.log(getNextPalindromeDate(date))


