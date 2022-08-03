import requests
from string import Template

x = requests.get('https://api.github.com/users/rafaelbmateus')

d = {
    'name': 'Rafael Mateus',
    'bio': 'A passionate Software Developer 🚀 having an experience of building Web and API applications with API Engineer GoLang / Ruby / Rails / Docker / K8s Python and some other cool libraries and frameworks.',
    'company': 'Neoway',
    'avatar_url': '',
    'github_url': '',
    'blog_url': '',
    'email_url': '',
}

with open('template.html', 'r') as f:
    src = Template(f.read())
    result = src.substitute(d)
    print(result)

with open('index.html', 'w') as f:
    f.write(result)
