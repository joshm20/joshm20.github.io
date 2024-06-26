/* See https://stackoverflow.com/questions/70534667/adding-last-updated-date-to-github-pages-from-private-repository
for source by Paul Burkart on stackoverflow.
*/
const desiredRepo = "joshm20.github.io";
const dateTagClass = ".lastUpdated";// The HTML element you want to update

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let repos = JSON.parse(this.responseText);

        repos.forEach((repo) => {
            if (repo.name == desiredRepo) {
                var lastUpdated = new Date(repo.updated_at);
                var day = lastUpdated.getUTCDate();
                var month = lastUpdated.getUTCMonth() + 1;
                var year = lastUpdated.getUTCFullYear();
                $(dateTagClass).text(`Last updated: ${month}-${day}-${year}`);
            }
        });
    }
};
xhttp.open("GET", "https://api.github.com/users/joshm20/repos", true);
xhttp.send();