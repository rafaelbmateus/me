$(document).ready(function () {
  repos();
});

async function repos() {
  const topic_tag = "me";
  const url = "https://api.github.com/users/" + username + "/repos";

  page = 1;
  count = 0;
  while (true) {
    const response = await fetch(url + "?sort=updated&direction=asc&page=" + page);
    const repos = await response.json();

    if (repos.length == 0) {
      break;
    }

    for (var i = 0; i < repos.length; i++) {
      repo = repos[i]
      if (repos[i].topics.includes(topic_tag)) {
        if (repo.language == null) repo.language = "Empty";
        if (repo.name.length > 30) repo.name = `${repo.name.substring(0, 30)}...`;
        if (repo.description.length > 100) repo.description = `${repo.description.substring(0, 100)}...`;
        $("#repos").append(repoCard(repo))
        count++;
      }
    }

    page++;
  }

  if (count == 0) {
    $("#repos").append(
      `<br><br>
      <h3 align="center">
        Add the "${topic_tag}" tag in GitHub repositories to show here!
      </h3>
      <br><br>`
    );
  }
}

function repoCard() {
  return `
    <div class="col">
      <a href="${repo.html_url}" target="_blank">
        <div class="card">
          <span class="repo-language gray">${repo.language}</span>
          <h3 class="gray">
            <i class="fa-brands fa-buffer"></i>
            ${repo.name}
          </h3>
          <p class="gray">${repo.description}</p>
          <div class="row repo-info gray">
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
    </div>`;
}
