var currentTime = moment().format('LTS');
var time = ["10:00:00 AM", "11:00:00AM", "12:00:00 pM", "1:00:00 PM", "2:00:00 PM", "3:00:00 PM", "4:00:00 PM", "5:00:00 PM", "6:00:00 PM"]
console.log(currentTime);
// ----- 5PM Check-----

if (currentTime > "5:00:00 PM" ){
    $("#5pm").addClass("past");
}

if (currentTime >= "5:00:00 PM" && currentTime < "6:00:00 PM" ){
    $("#5pm").addClass("present");
    $("#5pm").removeClass("past");
}
if (currentTime < "5:00:00 PM" ){
    $("#5pm").addClass("future");
}


// ----- 4PM Check-----

if (currentTime > "4:00:00 PM" ){
    $("#4pm").addClass("past");
}

if (currentTime >= "4:00:00 PM" && currentTime < "5:00:00 PM" ){
    $("#4pm").addClass("present");
    $("#4pm").removeClass("past");
}
if (currentTime < "4:00:00 PM" ){
    $("#4pm").addClass("future");
}


// ----- 3PM Check-----

if (currentTime > "3:00:00 PM" ){
    $("#3pm").addClass("past");
}

if (currentTime >= "3:00:00 PM" && currentTime < "4:00:00 PM" ){
    $("#3pm").addClass("present");
    $("#3pm").removeClass("past");
}
if (currentTime < "3:00:00 PM" ){
    $("#3pm").addClass("future");
}


// ----- 2PM Check-----

if (currentTime > "2:00:00 PM" ){
    $("#2pm").addClass("past");
}

if (currentTime >= "2:00:00 PM" && currentTime < "3:00:00 PM" ){
    $("#2pm").addClass("present");
    $("#2pm").removeClass("past");
}
if (currentTime < "2:00:00 PM" ){
    $("#2pm").addClass("future");
}


// ----- 1PM Check-----

if (currentTime > "1:00:00 PM" ){
    $("#1pm").addClass("past");
}

if (currentTime >= "1:00:00 PM" && currentTime < "2:00:00 PM" ){
    $("#1pm").addClass("present");
    $("#1pm").removeClass("past");
}
if (currentTime < "1:00:00 PM" ){
    $("#1pm").addClass("future");
}

// ----- 12PM Check-----

if (currentTime > "12:00:00 PM" ){
    $("#12pm").addClass("past");
}

if (currentTime >= "12:00:00 PM" && currentTime < "1:00:00 PM" ){
    $("#12pm").addClass("present");
    $("#12pm").removeClass("past");
}
if (currentTime < "12:00:00 PM" ){
    $("#12pm").addClass("future");
}

// ----- 11AM Check-----

if (currentTime > "11:00:00 AM" ){
    $("#11am").addClass("past");
}

if (currentTime >= "11:00:00 AM" && currentTime < "12:00:00 PM" ){
    $("#11am").addClass("present");
    $("#11am").removeClass("past");
}
if (currentTime < "11:00:00 AM" ){
    $("#11am").addClass("future");
}

// ----- 10AM Check-----

if (currentTime > "10:00:00 AM" ){
    $("#10am").addClass("past");
}

if (currentTime >= "10:00:00 AM" && currentTime < "11:00:00 AM" ){
    $("#10am").addClass("present");
    $("#10am").removeClass("past");
}
if (currentTime < "10:00:00 AM" ){
    $("#10am").addClass("future");
}

// ----- 9AM Check-----

if (currentTime > "9:00:00 AM" ){
    $("#9am").addClass("past");
}

if (currentTime >= "9:00:00 AM" && currentTime < "10:00:00 AM" ){
    $("#9am").addClass("present");
    $("#9am").removeClass("past");
}
if (currentTime < "9:00:00 AM" ){
    $("#9am").addClass("future");
}

