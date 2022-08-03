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
          <a href="${repo.html_url}" target="_blank">
            <div class="card">
              <span class="gray">${repo.language}</span>
              <h3 class="gray">
                <i class="fa-brands fa-buffer"></i>
                ${repo.name}
              </h3>
              <p class="gray">${repo.description}</p>
              <div class="row gray" style="font-size: 22px">
                <div class="col">
                  <i class="fa-solid fa-star fa-2xs"></i>
                  ${repo.stargazers_count}
                </div>
                <div class="col">
                  <i class="fa-solid fa-code-fork fa-2xs"></i>
                  ${repo.forks_count}
                </div>
                <div class="col">
                  <i class="fa-solid fa-eye fa-2xs"></i>
                  ${repo.watchers_count}
                </div>
                <div class="col">
                  ${repo.size} MB
                </div>
              </div>
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
