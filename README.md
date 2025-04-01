This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
<img width="1792" alt="Screenshot 2025-04-01 at 9 32 17 AM" src="https://github.com/user-attachments/assets/4206abc9-1550-40c0-b060-016c2cd43ed5" />

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

Next.js AI Chatbot with Infactory API Integration

Objective

This project integrates the Next.js AI Chatbot Template with Infactory’s Unified Endpoint API to enable the chatbot to answer questions specifically related to the NYC Taxi Rides dataset.

Features

Uses OpenAI function calling to detect NYC Taxi Rides dataset-related queries.

Fetches factual answers from Infactory’s Unified Endpoint API.

Provides accurate responses based on a single data source (NYC Taxi Rides.csv).


Setup Instructions

Prerequisites

Node.js installed

OpenAI API key

Infactory API credentials

GitHub account (for forking the template)

Installation

Clone the Repository:

[git clone (https://github.com/sachincs8678/nextjs-with-Infactory..git)]


Install Dependencies:

npm install

Set Up Environment Variables:
Create a .env.local file in the root directory and add the following:

OPENAI_API_KEY=your_openai_api_key
INFACTORY_API_KEY=your_infactory_api_key
NEXT_PUBLIC_API_URL=https://api.infactory.ai

Run the Development Server:

npm run dev

The chatbot should be accessible at http://localhost:3000.

Integration Details

OpenAI Function Calling: Implemented to detect queries related to NYC Taxi Rides.

Infactory API Integration: When a relevant question is detected, the chatbot makes an API call to Infactory’s Unified Endpoint to retrieve data.



Sample Questions

"Identify the busiest hour of the day in terms of the number of rides initiated."

"What is the average trip distance for rides with and without tolls, and how do their total fares compare?"

"What is the distribution of trip distances for rides with different passenger counts?"

"What is the correlation between base fare and total fare for rides with tips given?"

"Which payment type, cash or credit, is more commonly used for trips longer than 10 miles?"

"What is the average total fare for rides that have a trip duration of more than 30 minutes?"

"What are the top five most common trip distances and their average fares?"

"What is the average tip percentage for rides paid with cash versus credit?"


