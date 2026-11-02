"""
Customer.io Candidate Status Notification Test Script
Site ID: 4dec3b4bda99bbb38850

Usage:
  python scripts/test_customerio_candidate_events.py --email jyothipothula50@gmail.com --event shortlisted --api-key YOUR_TRACKING_API_KEY
  python scripts/test_customerio_candidate_events.py --email jyothipothula50@gmail.com --event accepted --api-key YOUR_TRACKING_API_KEY
  python scripts/test_customerio_candidate_events.py --email jyothipothula50@gmail.com --event rejected --api-key YOUR_TRACKING_API_KEY
"""

import sys
import json
import argparse
import urllib.request
import urllib.error
import base64

SITE_ID = "4dec3b4bda99bbb38850"

SAMPLE_DATA = {
    "shortlisted": {
        "event_name": "application_shortlisted",
        "data": {
            "candidate_name": "Jyothi Pothula",
            "job_title": "Senior Frontend Engineer",
            "company_name": "PhonePe",
            "new_status": "Shortlisted",
            "dashboard_url": "https://cps.uden.tech/index"
        }
    },
    "accepted": {
        "event_name": "application_accepted",
        "data": {
            "candidate_name": "Jyothi Pothula",
            "job_title": "Senior Frontend Engineer",
            "company_name": "PhonePe",
            "new_status": "Accepted",
            "dashboard_url": "https://cps.uden.tech/index"
        }
    },
    "rejected": {
        "event_name": "application_rejected",
        "data": {
            "candidate_name": "Jyothi Pothula",
            "job_title": "Senior Frontend Engineer",
            "company_name": "PhonePe",
            "new_status": "Rejected",
            "dashboard_url": "https://cps.uden.tech/index"
        }
    }
}

def send_event(site_id, api_key, email, event_key):
    if event_key not in SAMPLE_DATA:
        print(f"Error: Unknown event '{event_key}'. Choose from: shortlisted, accepted, rejected")
        sys.exit(1)

    spec = SAMPLE_DATA[event_key]
    url = f"https://track.customer.io/api/v1/customers/{email}/events"

    payload = {
        "name": spec["event_name"],
        "data": spec["data"]
    }

    req_data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=req_data, method="POST")

    auth_string = f"{site_id}:{api_key}"
    auth_b64 = base64.b64encode(auth_string.encode("utf-8")).decode("utf-8")

    req.add_header("Authorization", f"Basic {auth_b64}")
    req.add_header("Content-Type", "application/json")

    print(f"\n==========================================")
    print(f"Triggering Customer.io Event")
    print(f"Endpoint: {url}")
    print(f"Event Name: {spec['event_name']}")
    print(f"Recipient: {email}")
    print(f"Payload:\n{json.dumps(payload, indent=2)}")
    print(f"==========================================\n")

    try:
        with urllib.request.urlopen(req) as resp:
            status = resp.status
            print(f"SUCCESS: Customer.io responded with HTTP {status}")
            print(f"Check your Customer.io activity feed at: https://fly.customer.io/people/{email}/activity")
    except urllib.error.HTTPError as e:
        print(f"FAILED: HTTP Error {e.code}: {e.reason}")
        print(e.read().decode("utf-8", errors="ignore"))
    except Exception as e:
        print(f"ERROR: {str(e)}")

def main():
    parser = argparse.ArgumentParser(description="Send test events to Customer.io")
    parser.add_argument("--email", default="jyothipothula50@gmail.com", help="Candidate email address")
    parser.add_argument("--event", choices=["shortlisted", "accepted", "rejected", "all"], default="shortlisted", help="Event type to trigger")
    parser.add_argument("--site-id", default=SITE_ID, help=f"Customer.io Site ID (default: {SITE_ID})")
    parser.add_argument("--api-key", required=True, help="Customer.io Track API Key")

    args = parser.parse_args()

    if args.event == "all":
        for k in ["shortlisted", "accepted", "rejected"]:
            send_event(args.site_id, args.api_key, args.email, k)
    else:
        send_event(args.site_id, args.api_key, args.email, args.event)

if __name__ == "__main__":
    main()
