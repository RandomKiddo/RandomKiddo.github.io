import requests
from bs4 import BeautifulSoup as Soup

def get_subscribers(URL:str = 'https://www.youtube.com/channel/UCqORid7DP0chFER0SkjCb1A'):
    response = requests.get(URL)
    soup = Soup(response.text, 'html.parser')
    subs = None
    for _ in soup.find_all('yt-formatted-string', {'id': 'subscriber-count'}):
        subs = _
        break
    return str(subs)