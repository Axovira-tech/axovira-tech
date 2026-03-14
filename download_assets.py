import urllib.request
import os
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

BASE = "https://jsmastery.com"

def download(path, local_path):
    url = BASE + path
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, context=ctx) as r:
            with open(local_path, 'wb') as f:
                f.write(r.read())
        print(f"  OK  {path}")
        return True
    except Exception as e:
        print(f"  ERR {path}: {e}")
        return False

# 1. Get the scraped HTML
with open('index.html', 'r') as f:
    html = f.read()

# 2. Find all /_next/static paths  
paths = set(re.findall(r'"(/_next/static/[^"\\]+)"', html))
paths.update(re.findall(r"'(/_next/static/[^']+)'", html))
# Also find from css + js references inside scripts
paths.update(re.findall(r'(/_next/static/chunks/[a-zA-Z0-9._-]+\.js)', html))
paths.update(re.findall(r'(/_next/static/css/[a-zA-Z0-9._-]+\.css)', html))

print(f"Found {len(paths)} static assets to download...")

ok = 0
for path in sorted(paths):
    local = path.lstrip('/')  # e.g. _next/static/css/xxx.css
    if download(path, local):
        ok += 1

print(f"\nDownloaded {ok}/{len(paths)} files.")
