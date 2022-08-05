# github-me

Create your profile github page in less than 1 minute without a line of code!

The web page content is dynamically constructed using javascript
and connecting with the public github api.

## Features

- [x] Basic Profile (login, name and bio)
- [x] Company, Location, Blog and Twitter
- [x] Number of followers and following
- [x] Public repos
- [x] Account created at
- [x] List of repos with the tag
- [x] Deploy using gh-pages
- [x] SEO's meta tags
- [ ] Responsive
- [ ] Organizations
- [x] PWA

## How to create your profile page?

Simply fork this project to your github.

Summary:

1. [Create a fork](https://github.com/rafaelbmateus/me/fork)
2. Enable Github Actions
3. Run deploy to Pages
4. Deploy static content to Pages finished
5. Access your profile page in `https://<username>.github.io/me/`

### Details of the steps

#### 1. Create a fork

To create a fork of this project access
https://github.com/rafaelbmateus/me/fork
and click in "Create fork" button.

> You can create the repository with whatever name you want.
  To get a small url we will use: "me"

![](/docs/1-create-fork.png)

#### 2. Enable Github Actions

By default actions are not automatically enabled for forks.
Select Actions in your repository forked and click in
"I understand my workflows, go ahead and enable them".

![](/docs/2-enable-actions.png)

#### 3. Run deploy to Pages

Select "Deploy static content to Pages" Workflow,
click in "Run workflow", use workflow from Branch: main
and click in "Run workflow".

![](/docs/3-run-deploy.png)

#### 4. Deploy static content to Pages finished

Check if deploy static content to Pages workflow
run completed successfully.

![](/docs/4-check-deploy.png)

#### 5. Access your profile page

Access your profile page
in `https://<username>.github.io/me/`.

> Change `<username>` with your github user. Like: https://github.com/rafaelbmateus
  the username is `rafaelbmateus`.

![](/docs/5-preview.png)

## How show the repositories?

The repositories you want to appear in your profile page's project catalog put the `me` tag.

You can change the tag to another one you prefer in `assets/js/custom.js`.

## GitHub API

The HTML fields are filled using data from github.

The endpoint used are:

- [api.github.com/users/<username>](https://api.github.com/users/rafaelbmateus)
- [api.github.com/users/<username>/repos](https://api.github.com/users/rafaelbmateus/repos)

## Running localhost

Clone repository

```console
git clone git@github.com:rafaelbmateus/me.git
cd me
```

Build the page using:

```console
GITHUB_USERNAME=<username> python3 builder/main.py
```

## Others profile pages builders

If you want something more powerful take a look at the projects

- [developerFolio](https://github.com/saadpasta/developerFolio)

> it will probably take you more than 1 minute to deploy.
