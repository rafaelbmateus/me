import os
import github
from string import Template

username = os.getenv('GITHUB_USERNAME')

user = github.user(username)
print(user)

d = {
    'name': 'Rafael Mateus',
    'bio': 'A passionate Software Developer 🚀 having an experience of building Web and API applications with API Engineer GoLang / Ruby / Rails / Docker / K8s Python and some other cool libraries and frameworks.',
    'company': 'Neoway',
    'avatar_url': '',
    'github_url': '',
    'blog_url': '',
    'email_url': '',
}

with open('builder/template.html', 'r') as f:
    src = Template(f.read())
    result = src.substitute(d)
    print(result)

with open('index.html', 'w') as f:
    f.write(result)
