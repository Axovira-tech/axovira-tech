from http.server import HTTPServer, BaseHTTPRequestHandler
import urllib.request
import ssl
import os
import mimetypes

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

class ReverseProxyHandler(BaseHTTPRequestHandler):
    log_message = lambda self, *a: None  # silence default logging

    def do_GET(self):
        path = self.path.split('?')[0]  # strip query string for local file lookup

        # 1. Serve scraped index.html for root and the course page path
        if path in ('/', '/index.html', '/course/gsap-animations-course'):
            try:
                with open('index.html', 'rb') as f:
                    content = f.read()
                self.send_response(200)
                self.send_header('Content-type', 'text/html; charset=utf-8')
                self.end_headers()
                self.wfile.write(content)
                return
            except FileNotFoundError:
                pass

        # 2. Try to serve locally-downloaded static files
        local_path = path.lstrip('/')
        if os.path.isfile(local_path):
            mtype, _ = mimetypes.guess_type(local_path)
            with open(local_path, 'rb') as f:
                content = f.read()
            self.send_response(200)
            self.send_header('Content-type', mtype or 'application/octet-stream')
            self.end_headers()
            self.wfile.write(content)
            return

        # 3. Proxy everything else transparently to JS Mastery
        target_url = "https://jsmastery.com" + self.path
        try:
            req = urllib.request.Request(target_url)
            req.add_header('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36')
            with urllib.request.urlopen(req, context=ctx, timeout=15) as response:
                self.send_response(response.getcode())
                for key, value in response.headers.items():
                    if key.lower() not in ['transfer-encoding', 'content-encoding', 'connection']:
                        self.send_header(key, value)
                self.end_headers()
                self.wfile.write(response.read())
        except urllib.error.HTTPError as e:
            self.send_response(e.code)
            self.end_headers()
        except Exception as e:
            print(f"Proxy error {self.path}: {e}")
            self.send_response(500)
            self.end_headers()

    def do_POST(self):
        # Silently swallow analytics POSTs (PostHog, Vercel Insights etc.)
        self.send_response(200)
        self.end_headers()

if __name__ == '__main__':
    port = 8080
    httpd = HTTPServer(('', port), ReverseProxyHandler)
    print(f"Axovira Reverse Proxy running on http://localhost:{port}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        httpd.server_close()
