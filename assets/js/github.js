$(document).ready(function () {
  repos();
});

async function repos() {
  const url = "https://api.github.com/users/" + username + "/repos";
  const response = await fetch(url);
  const repos = await response.json();
  const topic_tag = "me";

  has = false;
  for (var i = 0; i < repos.length; i++) {
    repo = repos[i]
    if (repos[i].topics.includes(topic_tag)) {
      has = true;
      $("#repos").append(
        `<div class="col">
          <a>
            <div class="card">
              <h3>${getRepoName(repo.html_url)}</h3>
              <p class="gray">${repo.description}</p>
            </div>
          </a>
        </div>`
      );
    }
  }

  if (!has) {
    $("#repos").append(
      `<br><br>
      <h3 align="center">
        Add the "${topic_tag}" tag in GitHub repositories to show here!
      </h3>
      <br><br>`
    );
  }
}

function getRepoName(html_url) {
  return html_url.split("/")[4];
}
