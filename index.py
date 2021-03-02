from bs4 import BeautifulSoup as Soup
import requests

def scrape():
    URL = 'https://www.youtube.com/channel/UCqORid7DP0chFER0SkjCb1A'
    response = requests.get(URL)
    soup = Soup(response.text, 'html.parser')
    a = None
    for _ in soup.findall('a'):
        if (_.id == 'video-title'):
            a = _
            break
    identifier = a.href[a.index('=')+1:]
    return 'https://www.youtube.com/embed/{}?autoplay=1&mute=1'.format(identifier)

scrape()