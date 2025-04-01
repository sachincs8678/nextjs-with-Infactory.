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

Includes a working demo showcasing the chatbot in action.

Setup Instructions

Prerequisites

Node.js installed

OpenAI API key

Infactory API credentials

GitHub account (for forking the template)

Installation

Clone the Repository:

git clone https://github.com/your-repo/nextjs-ai-chatbot-infactory.git
cd nextjs-ai-chatbot-infactory

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

Try asking the chatbot the following questions:

"What was the average fare for NYC taxi rides in January 2023?"

"How many taxi rides were recorded on March 15, 2023?"

"What is the longest recorded taxi ride in the dataset?"

