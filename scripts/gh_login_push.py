import json, os, subprocess, sys, time, urllib.parse, urllib.request

PROJ = r"C:\Users\hashr\Videos\Jishnu\hwf"
CLIENT_ID = "178c6fc778ccc68e1d6a"  # public GitHub CLI OAuth client id (device flow)
LOG = os.path.join(PROJ, ".gh_login.log")


def w(msg):
    with open(LOG, "a", encoding="utf-8") as f:
        f.write(str(msg) + "\n")
        f.flush()


def post(url, data):
    req = urllib.request.Request(
        url, data=urllib.parse.urlencode(data).encode(),
        headers={"Accept": "application/json", "User-Agent": "heera-push"})
    return json.load(urllib.request.urlopen(req, timeout=30))


open(LOG, "w", encoding="utf-8").close()

d = post("https://github.com/login/device/code", {"client_id": CLIENT_ID, "scope": "repo"})
w("CODE " + d["user_code"])
w("URL " + d["verification_uri"])
w("WAITING")

device_code = d["device_code"]
interval = int(d.get("interval", 5))
deadline = time.time() + int(d.get("expires_in", 900))
token = None
while time.time() < deadline:
    time.sleep(interval)
    try:
        r = post("https://github.com/login/oauth/access_token", {
            "client_id": CLIENT_ID,
            "device_code": device_code,
            "grant_type": "urn:ietf:params:oauth:grant-type:device_code",
        })
    except Exception as e:
        w("POLL_ERR " + repr(e)); continue
    if "access_token" in r:
        token = r["access_token"]; break
    if r.get("error") == "authorization_pending":
        continue
    if r.get("error") == "slow_down":
        interval += 5; continue
    w("ERROR " + json.dumps(r)); sys.exit(1)

if not token:
    w("EXPIRED"); sys.exit(1)

w("AUTHORIZED")
inp = "protocol=https\nhost=github.com\nusername=x-access-token\npassword=%s\n\n" % token
subprocess.run(["git", "credential", "approve"], input=inp, text=True, cwd=PROJ)

p = subprocess.run(["git", "push", "origin", "main"], cwd=PROJ, capture_output=True, text=True)
w("PUSH_EXIT " + str(p.returncode))
w((p.stdout or "")[-3000:])
w((p.stderr or "")[-3000:])
w("DONE")
