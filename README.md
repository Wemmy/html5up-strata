# AWS Cloud Resume Challenge

## Introduction

This project outlines the requirements for building a personal resume as a static website hosted on AWS. The challenge incorporates various AWS services and web technologies to demonstrate cloud proficiency, including certifications, HTML/CSS, JavaScript, database integration, API creation, and infrastructure as code principles. This README provides guidance on achieving these requirements.

## Table of Contents

- [Certification](#certification)
- [HTML](#html)
- [CSS](#css)
- [Static Website](#static-website)
- [HTTPS](#https)
- [DNS](#dns)
- [Javascript](#javascript)
- [Database](#database)
- [API](#api)
- [Python](#python)
- [Tests](#tests)
- [Infrastructure as Code](#infrastructure-as-code)
- [Source Control](#source-control)
- [CI/CD](#cicd)
  - [Back End](#back-end)
  - [Front End](#front-end)
- [Contributors](#contributors)
- [License](#license)

## Certification

Ensure your resume includes the AWS Cloud Practitioner certification. Alternatively, a more advanced AWS certification is acceptable. Resources for exam preparation are available through A Cloud Guru.

## HTML

Your resume should be written in HTML format to ensure it's web-compatible.

## CSS

Style your HTML resume with CSS to enhance visual appeal. It doesn't need to be elaborate but should improve upon plain HTML.

## Static Website

Deploy your HTML resume as a static website using Amazon S3 for hosting.

## HTTPS

Utilize HTTPS for your S3 website by integrating with Amazon CloudFront for secure access.

## DNS

Configure a custom DNS domain name using Amazon Route 53 or another DNS provider, pointing to your CloudFront distribution.

## Javascript

Incorporate a visitor counter on your resume site using Javascript. This involves some coding to track site visits.

## Database

Use Amazon DynamoDB for storing and updating the visitor count. Opt for on-demand pricing to minimize costs.

## API

Create an API with AWS API Gateway and Lambda to interact with DynamoDB, avoiding direct database calls from Javascript.

## Python

Write Lambda function code in Python, leveraging the boto3 library for AWS interactions. This promotes exploration of Python in back-end development.

## Tests

Include tests for your Python code to ensure reliability and correctness. Resources are available for writing effective Python tests.

## Infrastructure as Code

Define AWS resources (DynamoDB table, API Gateway, Lambda function) using the AWS Serverless Application Model (SAM) or Terraform for infrastructure as code deployment.

## Source Control

Manage your project with GitHub repositories for both back-end API and front-end website code to enable version control and collaboration.

### CI/CD

#### Back End

Implement CI/CD with GitHub Actions for the back end. This automates testing and deployment of your serverless application upon code updates.

#### Front End

Set up CI/CD for the front end to automatically update the S3 bucket with new website code, including necessary cache invalidation steps.
