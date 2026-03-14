import urllib.request

# 1. Fetch exact raw HTML
url = "https://jsmastery.com/course/gsap-animations-course"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
except Exception as e:
    print(f"Error fetching: {e}")
    exit(1)

# 2. Inject ONLY the Next.js router spoof (to stop 404 page render on hydration)
spoofer = """
<script>
    // Spoof the path so Next.js hydration thinks we are on the correct route locally
    window.history.replaceState(null, '', '/course/gsap-animations-course');
</script>
"""
html = html.replace('<head>', '<head>' + spoofer)

# Do NOT rewrite /_next or /assets URLs. Let the local proxy handle them.
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Scraped exact HTML perfectly.")
