## Deploying a Simple Node.js App on AWS EKS

### A Beginner-Friendly and Cost-Effective Guide

This project demonstrates how to deploy a simple Node.js application on **Amazon Elastic Kubernetes Service (EKS)** — without overspending.  
The goal is to help beginners and developers learn **EKS deployment** while keeping costs under **$2** using minimal AWS resources.

## 🧠 Introduction

Most tutorials on Kubernetes jump straight into complex setups and assume deep prior knowledge.  
But in the real world, **cost matters** — especially for learners, small teams, and startups.

This guide shows how to:
- Deploy a simple Node.js app with a `/health` endpoint
- Configure **EKS** efficiently without overspending
- Test, scale, and clean up resources after use

By the end, you’ll not only know how to deploy to AWS EKS but also learn how to **think like a cost-conscious cloud engineer**.

---

## 🧰 Prerequisites

You’ll need the following tools:

- **AWS Account:** To create and manage cloud resources (EKS, EC2, etc.)
- **AWS CLI:** Command-line interface to manage AWS services  
- **kubectl:** Tool to manage Kubernetes clusters and deployments  
- **eksctl:** Simplifies EKS cluster creation and management  
- **Docker:** To containerize your Node.js app  
- **Node.js & npm:** Required to build and run the sample app  
- **VS Code (or any IDE):** To write and edit your code  
- **(Optional) Docker Hub account:** To store your Docker images

---

## 🚀 Step-by-Step Guide
### Step 1: Build the Node App

Clone this github repository 
```bash
git clone https://github.com/iamDayoDev/nodejs-app-aws-eks.git
cd nodejs-app-aws-eks
```
Then install dependencies and run the app:
```bash
npm install
npm start server.js
```
You should see the app running at `http://localhost:3000`.

### Step 2: Dockerize the App
Build the Docker image with the Dockerfile

```bash
docker build -t nodejs-eks-app .
docker run -p 3000:3000 -d  nodejs-eks-app
```
### Step 3: Push Image to DockerHub

Tag and push the image to DockerHub (replace `<your-dockerhub-username>` with your actual username):
```bash 
docker tag nodejs-eks-app <your-dockerhub-username>/nodejs-eks-app:latest
docker push <your-dockerhub-username>/nodejs-eks-app:latest
```
### Step 4: Create EKS Cluster
Create a minimal EKS cluster using `eksctl`:

```bash
eksctl create cluster -f cluster-config-yaml
```
This configuration uses the smallest instance type (`t3.micro`) to keep costs low.

### Step 5: Deploy the App to EKS
Apply the Kubernetes manifests to deploy the app:
```bash
kubectl apply -f deployment.yaml

kubectl apply -f service.yaml
``` 
### Step 6: Access the App
Get the service URL:
```bash
kubectl get svc
```
Use the external IP to access your app in the browser or via curl:
```bash
curl http://<EXTERNAL-IP>:3000/health
```
### Step 7: Manual Scaling
Scale the deployment manually:
```bash
kubectl scale deployment nodejs-eks-app --replicas=5

kubectl get pods
```
Scale Down the Deployment
```bash
kubectl scale deployment nodejs-eks-app --replicas=1
```
### Step 8: Clean Up Resources
Delete the EKS cluster to avoid ongoing charges:
```bash
eksctl delete cluster -f cluster-config-yaml
```
### Future Upgrade 
For a more advanced setup, consider implementing:
- **CI/CD Pipelines:** Automate deployments with GitHub Actions or Jenkins
- **Monitoring & Logging:** Integrate Prometheus and Grafana for monitoring
- **Auto-scaling:** Configure Horizontal Pod Autoscaler for dynamic scaling
- **Security Best Practices:** Implement IAM roles, security groups, and network policies
- **Cost Monitoring:** Use AWS Cost Explorer to track and optimize expenses



