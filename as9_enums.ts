enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
    }

function getDayType(day: DaysOfWeek): string {
    switch(day){
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
