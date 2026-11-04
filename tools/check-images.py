#!/usr/bin/env python3
"""List every remote image used by the site and report which ones fail to load.
Run locally (needs internet):  python3 tools/check-images.py
"""
import re, glob, urllib.request, urllib.error

urls = {}
for p in glob.glob('**/*.html', recursive=True):
    for u in re.findall(r'https://images\.unsplash\.com/photo-[A-Za-z0-9_-]+', open(p, encoding='utf-8').read()):
        urls.setdefault(u, set()).add(p)

bad = 0
for u in sorted(urls):
    try:
        req = urllib.request.Request(u + '?auto=format&fit=crop&w=400&q=60', headers={'User-Agent': 'Mozilla/5.0'})
        code = urllib.request.urlopen(req, timeout=15).status
    except urllib.error.HTTPError as e:
        code = e.code
    except Exception as e:
        code = type(e).__name__
    ok = code == 200
    bad += (not ok)
    print(('OK   ' if ok else 'FAIL ') + str(code), u, f'({len(urls[u])} pages)')
print(f'\n{len(urls)} unique images, {bad} failing')
