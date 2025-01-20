var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 0] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 3] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 4] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 5] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 6] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
function getDayType(day) {
    switch (day) {
        case DaysOfWeek.Monday:
            return "Weekday";
            break;
        case DaysOfWeek.Tuesday:
            return "Weekday";
            break;
        case DaysOfWeek.Wednesday:
            return "Weekday";
            break;
        case DaysOfWeek.Thursday:
            return "Weekday";
            break;
        case DaysOfWeek.Friday:
            return "Weekday";
            break;
        case DaysOfWeek.Saturday:
            return "Weekend";
            break;
        case DaysOfWeek.Sunday:
            return "Weekend";
            break;
        default:
            return "Invalid Day";
    }
}
console.log(getDayType(DaysOfWeek.Monday));
console.log(getDayType(DaysOfWeek.Sunday));
