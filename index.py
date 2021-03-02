import urllib
import json

def find():
    found = False
    videos = []
    ind = 1
    author = 'firsttry'

    inp = urllib.urlopen(r'http://gdata.youtube.com/feeds/api/videos?start-index={0}&max-results=50&alt=json&orderby=published&author={1}'.format(ind, author))
    try:
        response = json.load(inp)
        inp.close()
        rvids = response['feed']['entry']
        for vid in rvids:
            videos.append(vid)
    except:
        pass
    
    href = video['link'][0]['href']
    identifier = href[href.index('=')+1:]
    return 'https://www.youtube.com/embed/{}?autoplay=1&mute=1'.format(identifier)
        