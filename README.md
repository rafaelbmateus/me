# GitHub-me

Me is the easiest way to create your profile page from
[GitHub](https://github.com) for free. 😎

All your profile information will be accessed through the public
[GitHub API](https://docs.github.com/en/rest). 🎒

So, have your [GitHub registration](https://github.com/settings/profile) properly filled out.
That way you don't need to make any code changes. 🤖

You don't need to have infrastructure costs the availability will be made by
[gh-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) free of charge. 🤑

You will have a link to share on your social networks with SEO's meta tags.
will also be indexed by the google search engine. 🚀

✅ Profile information is done in the project build.

✅ The list of projects is dynamically updated using jquery on the client side.

## Features

- [x] Show basic profile (login, name and bio)
- [x] Show company, location, blog and twitter
- [x] Number of followers
- [x] Count of public repos
- [x] Account created at
- [x] List of repos with the tag
- [x] Progressive Web App (PWA)
- [x] SEO's meta tags
- [x] Deploy using gh-pages
- [ ] Responsive for mobile
- [ ] List organizations

## How to create your profile page?

To create your own profile follow the steps below.
Basically, just fork this project to your github.

Follow the steps:

1. [Create a fork](https://github.com/rafaelbmateus/me/fork)
2. Enable Github Actions
3. Run deploy to Pages
4. Access your profile page in `https://<username>.github.io/me`

### Details of the steps

#### 1. Create a fork

To create a fork of this project access
https://github.com/rafaelbmateus/me/fork
and click in "Create fork" button.

![1-create-fork](https://user-images.githubusercontent.com/8009492/183292845-e8f86d3e-c596-4212-9924-44298df7d063.png)

#### 2. Enable Github Actions

By default actions are not automatically enabled for forks.
Select Actions in your repository forked and click in
"I understand my workflows, go ahead and enable them".

![2-enable-actions](https://user-images.githubusercontent.com/8009492/183292858-e7c7d341-b2b4-4b12-8f70-11347ccc1820.png)

#### 3. Run deploy to Pages

Select "Deploy static content to Pages" Workflow,
click in "Run workflow", use workflow from Branch: main
and click in "Run workflow".

![3-run-deploy](https://user-images.githubusercontent.com/8009492/183292862-88981f49-1f68-420c-88f2-d11f57f340e4.png)

Check if deploy static content to Pages workflow
run completed successfully.

![4-check-deploy](https://user-images.githubusercontent.com/8009492/183292869-b9a0c403-7988-4d1c-aab1-d80d055bbbf2.png)

#### 4. Access your profile page

Access your profile page
in `https://<username>.github.io/me/`.

> Change `<username>` with your github user. Like: https://github.com/rafaelbmateus
  the username is `rafaelbmateus`.

![5-Preview](https://user-images.githubusercontent.com/8009492/183321695-387a6c97-d8b8-45f5-bd79-a6e67a70cb52.png)

## How show the repositories?

The repositories you want to appear in your profile page's project catalog put the `me` tag.

You can change the tag to another one you prefer
but you will need to change a line of code
[assets/js/github.js#L6](https://github.com/rafaelbmateus/me/blob/main/assets/js/github.js#L6).

## GitHub API

The HTML fields are filled using data from github.

The endpoint used are:

- [api.github.com/users/:user](https://api.github.com/users/rafaelbmateus)
- [api.github.com/users/:user/repos](https://api.github.com/users/rafaelbmateus/repos)

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

If you want something more powerful take a look at the projects:

- [Docusaurus](https://docusaurus.io)
- [Hugo](https://gohugo.io)
- [Jekyll](https://jekyllrb.com)
- [Gatsby](https://www.gatsbyjs.com)
- [DeveloperFolio](https://github.com/saadpasta/developerFolio)

> it will probably take you more than 1 minute to deploy.
