/* Your Code Here */
function createEmployeeRecord(testEmployee){
    return{
        firstName:testEmployee [0],
        familyName:testEmployee [1],
        title:testEmployee [2],
        payPerHour:testEmployee[3],
        timeInEvents:[],
        timeOutEvents:[],
    }
}

function createEmployeeRecords(twoRows){
    return twoRows.map(createEmployeeRecord)
}

function createTimeInEvent(datestamp){
    this.timeInEvents.push({
        type: "TimeIn",
        hour: +datestamp.split(" ")[1],
        date: datestamp.split(" ")[0]
    })
    return this
}

function createTimeOutEvent(datestamp){
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: +datestamp.split(" ")[1],
        date: datestamp.split(" ")[0]
    })
    return this
}

 function hoursWorkedOnDate(dates){
    let timeIn = this.timeInEvents.find((e) => e.date === dates).hour
    let timeOut = this.timeOutEvents.find((e) => e.date === dates).hour
    return (timeOut - timeIn)/100
 }

 function wagesEarnedOnDate(dates){
   return hoursWorkedOnDate.call(this, dates) * this.payPerHour
 }
 
 function calculatePayroll(tEmployees) {
    return tEmployees.map(tEmployees => allWagesFor.call(tEmployees)).reduce((total, wages) => total + wages)
}

function findEmployeeByFirstName(tEmployees, firstName) {
    return tEmployees.find((tEmployees) => tEmployees.firstName === firstName)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

