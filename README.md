## Name: Aderinto Adedayo
## Slack Name: aderinto adedayo


#  Automated Containerization & Deployment Script

A **POSIX-compliant Bash script** for automating the containerization, deployment, and reverse proxy setup of web applications using **Docker** and **Nginx**, with optional **SSL configuration** via Certbot or self-signed certificates.

---

## Features

-  Automated Docker image building and container deployment  
-  Nginx reverse proxy setup for routing HTTP traffic  
-  SSL certificate configuration (Certbot or self-signed)  
-  POSIX-compliant Bash scripting for compatibility and portability  
-  Secure defaults and error handling with `set -euo pipefail`  
-  Supports both **single Dockerfile** or **docker-compose.yml** projects  
-  Logging to file with real-time console output  

---

##  Prerequisites

Before using this script, ensure your remote server or environment has:

- AWS Account
- Github Repository 
- **Docker** and **Docker Compose**
- **Nginx**
- **OpenSSL** (Optional: Certbot or  self-signed certificates)


If running locally, make sure you can SSH into the remote server with a private key.

---

##  Usage

Run the script interactively

### 🔹 Interactive Mode

```bash
bash -x ./deploy1.sh
```

## Server IP - 54.183.140.52

## Access App - http://54.183.140.52:3000
