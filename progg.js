function daysSinceYearStart() {
    let today = new Date();
    let startOfYear = new Date(today.getFullYear(), 0, 1);
    let diff = today - startOfYear;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;
}

console.log("Days since the year's start:", daysSinceYearStart());
