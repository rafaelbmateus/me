import os
import github
from string import Template
from dateutil import parser

username = os.getenv('GITHUB_USERNAME')
user = github.user(username)

title = f'{user["name"]} | GitHub Profile Page'
if user["name"] == None:
    user["name"] = ""
    title = 'GitHub Profile Page'

if user["bio"] == None:
    user["bio"] = ""

company = f'@{user["company"]}'
if user["company"] == None:
    company = ""

if user["location"] == None:
    user["location"] = ""

d = {
    'username': username,
    'title': f'{title}', 
    'name': user['name'],
    'bio': user['bio'],
    'company': company,
    'location': user['location'],
    'avatar_url': user['avatar_url'],
    'github_url': user['html_url'],
    'blog_url': f'https://{user["blog"]}',
    'repos_url': f'{user["html_url"]}?tab=repositories',
    'followers_url': f'{user["html_url"]}?tab=followers',
    'repos_count': user["public_repos"],
    'followers_count': user["followers"],
    'created_at': f'Since {parser.parse(user["created_at"]).strftime("%B %Y")} on GitHub.',
}

with open('builder/template.html', 'r') as f:
    src = Template(f.read())
    result = src.substitute(d)

with open('index.html', 'w') as f:
    f.write(result)

print("profile was generated successfully")
