import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Database, Server, Monitor, Code, Globe, HardDrive, Network, Activity, FileText } from "lucide-react"

const awsServices = [
  {
    name: "Amazon EC2",
    description: "t2.micro instance with Amazon Linux 2",
    icon: Server,
    screenshot: "/screenshots/Amazon EC2.png",
    color: "bg-orange-100 text-orange-800",
  },
  {
    name: "Amazon VPC",
    description: "Custom VPC with public subnet and Internet Gateway",
    icon: Network,
    screenshot: "/screenshots/Amazon VPC.png",
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "AWS Lambda",
    description: "Hello World function in Python",
    icon: Code,
    screenshot: "/screenshots/Amazon Lambda.png",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    name: "Amazon S3",
    description: "Private bucket with versioning enabled",
    icon: Database,
    screenshot: "/screenshots/Amazon S3.png",
    color: "bg-green-100 text-green-800",
  },
  {
    name: "Amazon RDS",
    description: "db.t2.micro MySQL instance",
    icon: Database,
    screenshot: "/screenshots/Amazon RDS.png",
    color: "bg-indigo-100 text-indigo-800",
  },
  {
    name: "Amazon CloudWatch",
    description: "CPU utilization alarm > 70%",
    icon: Monitor,
    screenshot: "/screenshots/Amazon Cloudwatch.png",
    color: "bg-red-100 text-red-800",
  },
  {
    name: "AWS CloudTrail",
    description: "API activity monitoring enabled",
    icon: Activity,
    screenshot: "/screenshots/Amazon CLoudtrail.png",
    color: "bg-teal-100 text-teal-800",
  },
  {
    name: "AWS CloudFormation",
    description: "EC2 instance deployment template",
    icon: Cloud,
    screenshot: "/screenshots/Amazon Cloudformation.png",
    color: "bg-cyan-100 text-cyan-800",
  },
  {
    name: "Terraform code",
    description: "Terraform code for AWS infrastructure",
    icon: Code,
    screenshot: "/screenshots/Terraform code.png",
    color: "bg-gray-100 text-gray-800",
  },
]

export default function AWSShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AWS Infrastructure Showcase</h1>
            <p className="text-xl text-gray-600 mb-6">Terraform & AWS Console Implementation</p>

            {/* Personal Details Section */}
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Student Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div>
                    <label className="font-semibold text-gray-700">Name:</label>
                    <p className="text-gray-900 border-b border-gray-200 pb-1">Rishabh Vishwakarma</p>
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700">Registration Number:</label>
                    <p className="text-gray-900 border-b border-gray-200 pb-1">12219457</p>
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700">Email:</label>
                    <p className="text-gray-900 border-b border-gray-200 pb-1">rishabhvis15@gmail.com</p>
                  </div>
                  <div>
                    <label className="font-semibold text-gray-700">Course:</label>
                    <p className="text-gray-900 border-b border-gray-200 pb-1">BTECH CSE</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Objective Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Cloud className="h-6 w-6" />
              Project Objective
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              This project demonstrates the creation of basic infrastructure resources across multiple AWS services
              using both Terraform and AWS Console. Each service implementation follows AWS Free Tier guidelines and
              showcases fundamental cloud infrastructure concepts including compute, storage, networking, monitoring,
              and Infrastructure as Code (IaC) practices.
            </p>
          </CardContent>
        </Card>

        {/* AWS Services Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AWS Services Implementation</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awsServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${service.color}`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{service.name}</CardTitle>
                        </div>
                      </div>
                      <Badge variant="secondary">AWS</Badge>
                    </div>
                    <CardDescription className="text-sm">{service.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Screenshot Container */}
                    <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      {service.screenshot ? (
                        <img
                          src={service.screenshot}
                          alt={service.name + " Screenshot"}
                          className="mx-auto rounded shadow max-h-48 object-contain"
                        />
                      ) : (
                        <div className="space-y-2">
                          <Monitor className="h-12 w-12 text-gray-400 mx-auto" />
                          <p className="text-sm text-gray-500 font-medium">Screenshot Placeholder</p>
                          <p className="text-xs text-gray-400">No screenshot available</p>
                        </div>
                      )}
                    </div>

                    {/* Status Badge */}
                    <div className="mt-4 flex justify-between items-center">
                      <Badge variant="outline" className="text-green-700 border-green-300">
                        ✓ Completed
                      </Badge>
                      <span className="text-xs text-gray-500">Free Tier Eligible</span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Tools & Technologies */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Tools & Technologies Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <Server className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <p className="font-semibold">AWS Console</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Code className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold">Terraform</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="font-semibold">Vercel</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Cloud className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="font-semibold">AWS CDK</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        {/* (Remove the entire Card component for instructions) */}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">AWS Infrastructure Showcase • Built with Next.js & Deployed on Vercel</p>
          <p className="text-gray-400 text-sm mt-2">Task-3 Terraform Cloud Infrastructure Assignment</p>
        </div>
      </footer>
    </div>
  )
}
