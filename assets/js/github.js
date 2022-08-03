$(document).ready(function () {
  profile();
  repos();
});

async function profile() {
  const url = "https://api.github.com/users/" + getUsername();
  const response = await fetch(url);
  const user = await response.json();

  $("head").append(`<title>${user.name} | github-me</title>`);
  $("head").append(`<meta name="description" content="${user.bio}">`);
  $("head").append(`<meta name="keywords" content="${user.name}, github-me, profile, webpage, portfolio">`);
  $("head").append(`<meta name="author" content="${user.name}">`);
  $("head").append(`<meta property="og:type" content="website">`);
  $("head").append(`<meta property="og:site_name" content="${user.name} | github-me">`);
  $("head").append(`<meta property="og:title" content="${user.name} | github-me">`);
  $("head").append(`<meta property="og:description" content="${user.bio}">`);
  $("head").append(`<meta property="og:url" content="${window.location.href}">`);
  $("head").append(`<meta property="og:image" itemprop="image" content="${user.avatar_url}">`);
  $("head").append(`<link id="favicon" rel="profile icon" type="image/png" href="${user.avatar_url}">`);

  if (user.name != null) {
    $("#logo-name").text(user.name);
    $("#name").text(`${greetings}, I'm ${user.name}`);
  }

  if (user.bio != null) {
    $("#bio").text(user.bio);
  }
  
  if (user.company != null) {
    $("#company").text(`@${user.company}`);
  }

  if (user.location != null) {
    $("#location").text(`From ${user.location}`);
  }

  $("#public_repos").text(`${user.public_repos} repositories`);
  $("#followers").text(`${user.followers} followers`);
  $("#github_url").attr("href", user.html_url);
  $("#blog_url").attr("href", `https://${user.blog}`);
  $("#email_url").attr("href", user.html_url);
  $("#repos_url").attr("href", `${user.html_url}?tab=repositories`);
  $("#followers_url").attr("href", `${user.html_url}?tab=followers`);
  $("#created_at").text(`Since ${since(user.created_at)} on GitHub.`);
}

async function repos() {
  const url = "https://api.github.com/users/" + getUsername() + "/repos";
  const response = await fetch(url);
  const repos = await response.json();

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

function getUsername() {
  fromURL = window.location.href.split(".github.io")[0].split("/")[2]
  if (fromURL != "") {
    return fromURL
  }
  
  return username
}

function getRepoName(html_url) {
  return html_url.split("/")[4];
}
