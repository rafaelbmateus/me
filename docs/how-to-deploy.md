# How to deploy

Step by step about how to deploy your project using
[github action](https://github.com/features/actions)
on [gh-pages](https://docs.github.com/pages).

## 1. Create a fork

To create a fork of this project access
https://github.com/rafaelbmateus/me/fork
and click in "Create fork" button.

![1-create-fork](https://user-images.githubusercontent.com/8009492/183292845-e8f86d3e-c596-4212-9924-44298df7d063.png)

## 2. Enable Github Actions

By default actions are not automatically enabled for forks.
Select Actions in your repository forked and click in
"I understand my workflows, go ahead and enable them".

![2-enable-actions](https://user-images.githubusercontent.com/8009492/183292858-e7c7d341-b2b4-4b12-8f70-11347ccc1820.png)

## 3. Run deploy to Pages

Select "Deploy static content to Pages" Workflow,
click in "Run workflow", use workflow from Branch: main
and click in "Run workflow".

![3-run-deploy](https://user-images.githubusercontent.com/8009492/183292862-88981f49-1f68-420c-88f2-d11f57f340e4.png)

Check if deploy static content to Pages workflow
run completed successfully.

![4-check-deploy](https://user-images.githubusercontent.com/8009492/183292869-b9a0c403-7988-4d1c-aab1-d80d055bbbf2.png)

## 4. Access your profile page

Access your profile page
in `https://<username>.github.io/me/`.

> Change `<username>` with your github user. Like: https://github.com/rafaelbmateus
  the username is `rafaelbmateus`.
  
![5-preview](https://user-images.githubusercontent.com/8009492/184021181-a8d9c906-260c-4673-9265-32b9b7d45325.png)
