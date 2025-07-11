# AWS Terraform Showcase (Task 3)

This project is a showcase of AWS infrastructure implementations using both Terraform and the AWS Console. It is designed as part of a cloud infrastructure assignment and demonstrates the creation and management of various AWS services, following AWS Free Tier guidelines.

## Features
- Student information and project overview
- Visual grid of AWS services implemented (EC2, VPC, Lambda, S3, RDS, CloudWatch, CloudTrail, CloudFormation, and Terraform code)
- Screenshot display for each service
- Modern UI built with Next.js, Tailwind CSS, and Radix UI components

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm (v7 or later)

### Installation
1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd aws-terraform-showcase Task3
   ```
2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
- `app/` - Next.js app directory (pages, layout, upload form)
- `components/` - Reusable UI and logic components
- `public/screenshots/` - Place your AWS screenshots here (named as per the service)
- `styles/` - Global styles

## Adding Your Screenshots
1. Place your screenshots in the `public/screenshots/` folder.
2. Name each file according to the AWS service (e.g., `Amazon EC2.png`, `Amazon VPC.png`, `Terraform code.png`).
3. The homepage will automatically display the screenshots in the correct place.

## Deployment
- Push your code to GitHub.
- Connect your repository to [Vercel](https://vercel.com/) for automatic deployment.
- Submit your deployed URL as required by your assignment.

## License
This project is for educational purposes. 