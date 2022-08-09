$(document).ready(function () {
  repos();
});

const url = "https://api.github.com/users/" + username + "/repos";
const topic_tag = "me";

async function repos() {

  page = 1;
  count = 0;
  while (true) {
    const response = await fetch(url + "?sort=updated&direction=desc&per_page=100&page=" + page);
    const repos = await response.json();
    $("#loading").hide();

    if (!repos.length) {
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
  <div class="rounded overflow-hidden shadow-lg hover:bg-gray-100">
    <div class="p-6">
      <div class="font-bold text-xl text-gray-500">${repo.language}</div>
      <br>
      <a class="font-bold text-2xl text-gray-600" href="${repo.html_url}" target="_blank">
        <i class="fa-brands fa-buffer"></i>
        ${repo.name}
      </a>
      <p class="pt-4 text-base text-gray-500">
        ${repo.description}
      </p>
    </div>
    <div class="pl-3 pt-4">
      <span class="inline-block px-3 text-sm font-semibold text-gray-600">
        <i class="fa-solid fa-star fa-2xs"></i>
        ${repo.stargazers_count}
      </span>
      <span class="inline-block px-3 text-sm font-semibold text-gray-600">
        <i class="fa-solid fa-code-fork fa-2xs"></i>
        ${repo.forks_count}
      </span>
      <span class="inline-block px-3 text-sm font-semibold text-gray-600">
        <i class="fa-solid fa-eye fa-2xs"></i>
        ${repo.watchers_count}
      </span>
      <span class="inline-block px-3 text-xs font-semibold text-gray-600">
        ${repo.size} MB
      </span>
    </div>
    <div class="p-4">
      ${topicsSpan(repo)}
    </div>
  </div>`;
}

function topicsSpan(repo) {
  topics = "";
  for (var i = 0; i < repo.topics.length; i++) {
    topic = repo.topics[i];
    if (topic == topic_tag) { continue; }
    topics += `<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-1">#${topic}</span>`
  }

  return topics
}
