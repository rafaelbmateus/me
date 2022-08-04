import os
import github
from string import Template
from dateutil import parser

username = os.getenv('GITHUB_USERNAME')
user = github.user(username)

if user["name"] == None:
    user["name"] = ""
    title = f'{user["name"]} | '

if user["company"] == None:
    user["company"] = ""

if user["location"] == None:
    user["location"] = ""

d = {
    'username': username,
    'title': f'{title}GitHub Profile Page', 
    'name': user['name'],
    'bio': user['bio'],
    'company': user['company'],
    'location': user['location'],
    'avatar_url': user['avatar_url'],
    'github_url': user['html_url'],
    'blog_url': f'https://{user["blog"]}',
    'repos_url': f'{user["html_url"]}?tab=repositories',
    'followers_url': f'{user["html_url"]}?tab=followers',
    'public_repos': f'{user["public_repos"]} repositories',
    'followers': f'{user["followers"]} followers',
    'created_at': f'Since {parser.parse(user["created_at"]).strftime("%B %Y")} on GitHub.',
}

with open('builder/template.html', 'r') as f:
    src = Template(f.read())
    result = src.substitute(d)

with open('index.html', 'w') as f:
    f.write(result)

print("The index.html file was successfully generated")
