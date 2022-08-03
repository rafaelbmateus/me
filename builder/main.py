import os
import github
from string import Template

username = os.getenv('GITHUB_USERNAME')

user = github.user(username)
print(user)

d = {
    'username': username,
    'name': user['name'],
    'bio': user['bio'],
    'company': user['company'],
    'location': user['location'],
    'avatar_url': user['bio'],
    'github_url': user['html_url'],
    'blog_url': f'https://{user["blog"]}',
    'email_url': '',
    'repos_url': f'{user["html_url"]}?tab=repositories',
    'followers_url': f'{user["html_url"]}?tab=followers',
    'created_at': f'Since {user["created_at"]} on GitHub.',
    'public_repos': f'{user["public_repos"]} repositories',
    'followers': f'{user["followers"]} followers',
}

with open('builder/template.html', 'r') as f:
    src = Template(f.read())
    result = src.substitute(d)
    print(result)

with open('index.html', 'w') as f:
    f.write(result)
