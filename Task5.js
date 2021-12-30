let my_date_arr = [
    "2005-02-20",
    "2005-01-11",
    "1976-01-29",
    "1977-08-11",
    "2000-08-09",
    "2001-12-31"
];

var sorted = my_date_arr.slice()
    .sort(function(a, b) {
        return new Date(a) - new Date(b);
    });

console.log(
    'Max date is:', sorted.pop()
);