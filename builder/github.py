import requests
from requests.exceptions import HTTPError

GITHUB_API = 'https://api.github.com'


def user(username):
  """Get user info from GitHub API"""
  try:
      response = requests.get(f'{GITHUB_API}/users/{username}')
      response.raise_for_status()
      return response.json()
  except HTTPError as http_err:
      print(f'HTTP error occurred: {http_err}')
  except Exception as err:
      print(f'Other error occurred: {err}')
