"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScreenshotUploader } from "@/components/screenshot-uploader"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

const awsServices = [
  "Amazon EC2",
  "Amazon VPC",
  "AWS Lambda",
  "Amazon S3",
  "Amazon EBS",
  "Amazon RDS",
  "Amazon Athena",
  "Amazon CloudWatch",
  "AWS CloudTrail",
  "AWS CloudFormation",
  "AWS CDK",
]

export default function UploadPage() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    registrationNumber: "",
    email: "",
    course: "",
  })

  const [screenshots, setScreenshots] = useState<{ [key: string]: File }>({})

  const handlePersonalInfoChange = (field: string, value: string) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handleScreenshotUpload = (service: string, file: File) => {
    setScreenshots((prev) => ({ ...prev, [service]: file }))
  }

  const handleSave = () => {
    // Here you would typically save the data
    console.log("Personal Info:", personalInfo)
    console.log("Screenshots:", screenshots)
    alert("Information saved! You can now deploy to Vercel.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Showcase
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Update Your AWS Showcase</h1>
          <p className="text-gray-600 mt-2">
            Add your personal information and upload screenshots of your AWS implementations.
          </p>
        </div>

        {/* Personal Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={personalInfo.name}
                  onChange={(e) => handlePersonalInfoChange("name", e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="registration">Registration Number</Label>
                <Input
                  id="registration"
                  value={personalInfo.registrationNumber}
                  onChange={(e) => handlePersonalInfoChange("registrationNumber", e.target.value)}
                  placeholder="Enter your registration number"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={personalInfo.email}
                  onChange={(e) => handlePersonalInfoChange("email", e.target.value)}
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <Label htmlFor="course">Course/Program</Label>
                <Input
                  id="course"
                  value={personalInfo.course}
                  onChange={(e) => handlePersonalInfoChange("course", e.target.value)}
                  placeholder="Enter your course or program"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Screenshot Upload */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>AWS Service Screenshots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awsServices.map((service) => (
                <div key={service}>
                  <h4 className="font-medium text-gray-900 mb-3">{service}</h4>
                  <ScreenshotUploader
                    serviceName={service}
                    onUpload={(file) => handleScreenshotUpload(service, file)}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="text-center">
          <Button onClick={handleSave} size="lg" className="px-8">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>

        {/* Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Deployment Instructions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">1. Save Your Changes</h4>
              <p className="text-blue-800 text-sm">
                Click the "Save Changes" button above to store your information and screenshots.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">2. Deploy to Vercel</h4>
              <p className="text-green-800 text-sm">
                Push your updated code to GitHub, then connect your repository to Vercel for automatic deployment.
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">3. Submit Your URL</h4>
              <p className="text-purple-800 text-sm">
                Once deployed, copy your Vercel URL and submit it to the Google Form provided in your assignment.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
