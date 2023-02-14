function progress_bar()
{
    let first_day = new Date(year=2021, month=7, date=27);
    let today = new Date();
    let graduation = new Date(year=2025, month=4, date=10, hours=12);

    let total_time_diff = graduation.getTime() - first_day.getTime();
    let curr_time_diff = today.getTime() - first_day.getTime();

    let graduation_progress = (curr_time_diff / total_time_diff) * 100;

    document.getElementById("graduation_progress").innerHTML = Math.floor(graduation_progress) + "%";
    document.getElementById("graduation_progress_bar").style = "width: "+ Math.floor(graduation_progress) + "%";

    setTimeout(progress_bar, 100000);
}