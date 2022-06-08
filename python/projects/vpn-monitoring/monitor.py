# To run:
# crontab -e
# */15 * * * * python3 /opt/monitoring/monitor.py

import os
import time

def isResourceAvailable(container):
    result = os.popen(f"docker exec {container} curl --max-time 15 https://example.com").read()
    return "Example Domain" in result

def vpnIsWorking():
    if (not isResourceAvailable("crawler")):
        return False
    if (not isResourceAvailable("notifier")):
        return False
    return True

def restartContainers():
    os.system("docker restart fortivpn")
    time.sleep(30)
    os.system("docker restart crawler")
    os.system("docker restart notifier")

if (vpnIsWorking()):
    print("Everything is OK")
else:
    print("Restart all containers")
    restartContainers()