# AWS Terraform CI/CD Showcase

This project demonstrates a **cloud-native CI/CD–oriented DevOps workflow** using **AWS, Terraform, Git, and modern frontend tooling**. It showcases how cloud infrastructure and DevOps practices can be designed, provisioned, documented, and deployed following **AWS Free Tier** and **Infrastructure as Code (IaC)** principles.

🔗 **Live Deployment:** [https://<your-vercel-deployment-link>](https://terraform-aws-console-implementatio-peach.vercel.app/)

---

## Project Overview

* Designed as a **DevOps + Cloud Infrastructure showcase**
* Focuses on **CI/CD concepts, IaC, automation, and cloud resource visibility**
* Infrastructure created using **Terraform** and validated via **AWS Console**
* Frontend application acts as a **documentation dashboard** for deployed AWS services

---

## DevOps & CI/CD Focus

* **Git-based version control** for infrastructure and application code
* **Terraform** used for Infrastructure as Code (IaC) to ensure reproducibility
* **Cloud-ready architecture** aligned with CI/CD deployment pipelines
* Designed to integrate easily with **Jenkins / GitHub Actions** for automated build & deploy workflows
* **Vercel-based deployment** simulates continuous delivery of infrastructure documentation

---

## AWS Services Implemented

* EC2
* VPC (subnets, routing, security groups)
* S3
* Lambda
* RDS
* CloudWatch
* CloudTrail
* CloudFormation
* Terraform (IaC)

Each service is represented with **real deployment screenshots** for validation and review.

---

## Features

* Student and project overview section
* Grid-based visual representation of AWS services
* Screenshot-based proof of infrastructure deployment
* Modern UI built with **Next.js, Tailwind CSS, and Radix UI**
* CI/CD-ready structure suitable for pipeline automation

---

## Getting Started

### Prerequisites

* Node.js (v18 or later recommended)
* npm (v7 or later)

### Installation

```bash
git clone <your-repo-url>
cd aws-terraform-showcase-task3
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

* `app/` – Next.js app directory (pages, layouts, dashboard views)
* `components/` – Reusable UI and logic components
* `public/screenshots/` – AWS service screenshots
* `styles/` – Global styling

---

## Adding AWS Screenshots

1. Place screenshots inside `public/screenshots/`
2. Name files by service (e.g., `Amazon EC2.png`, `Amazon VPC.png`, `Terraform Code.png`)
3. UI auto-renders screenshots in the dashboard

---

## Deployment & CI/CD Simulation

* Code pushed to **GitHub**
* Automatically deployed using **Vercel**
* Can be extended to include:

  * Jenkins pipelines
  * GitHub Actions
  * Terraform plan/apply automation
  * AWS credential management via secrets

---

## Use Case

* DevOps / Cloud Engineer portfolio project
* CI/CD + IaC demonstration
* Academic cloud infrastructure assignment
* Recruiter-friendly, visual proof of AWS + Terraform skills

---

## License

This project is intended **strictly for educational and learning purposes**.

---
