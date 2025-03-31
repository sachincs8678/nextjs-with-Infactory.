import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
    try {
        const { messages } = await req.json();

        // Call OpenAI API
        const response = await openai.chat.completions.create({
            model: "gpt-4-0613",
            messages,
            functions: [
                {
                    name: "fetch_taxi_data",
                    description: "Get NYC Taxi Rides data from Infactory API",
                    parameters: {
                        type: "object",
                        properties: {
                            query: {
                                type: "string",
                                description: "User question about NYC Taxi Rides",
                            },
                        },
                        required: ["query"],
                    },
                },
            ],
        });

        const functionCall = response.choices[0]?.message?.function_call;

        if (functionCall?.name === "fetch_taxi_data") {
            const query = JSON.parse(functionCall.arguments).query;
            const data = await fetchTaxiData(query);
            return NextResponse.json({ messages: [...messages, { role:"assistant", content: data }] });
        }

        return NextResponse.json({ messages: [...messages, response.choices[0].message] });

    } catch (error) {
        return NextResponse.json({ error: "Something went wrong", details: error.message }, { status: 500 });
    }
}

// Function to Call Infactory API
async function fetchTaxiData(query) {
    const payload = {
        messages: [{ role: "user", content: query }],
        model: "infactory-v1",
    };

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/integrations/chat/bf65839b-ff2d-4216-85db-ae7065a63711/chat/completions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.INFACTORY_API_KEY}`,
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
      //  console.log("Full Response:", data);

        let parsedContent;
        try {
            parsedContent = JSON.parse(data.choices?.[0]?.message?.content || "{}");
        } catch (error) {
            console.error("Failed to parse response content:", error);
            return "Invalid response format.";
        }

        const items = parsedContent.items?.MAIN?.item;
        if (!items || !items.rows) {
            console.log("Unexpected response structure:", parsedContent);
            return "No relevant data found.";
        }

      //  console.log("Rows found:", items.rows);

        // Dynamically format the rows
        let formattedData = items.rows.map(row => {
            return Array.isArray(row) ? row.join(": ") : JSON.stringify(row);
        }).join("\n");

    //    console.log("Formatted Data:", formattedData);

        // Send formatted data to OpenAI for summarization
        const openaiResponse = await openai.chat.completions.create({
            model: "gpt-4-0613",
            messages: [
                { role: "system", content: "Summarize the following NYC taxi data in a clear and concise way for a user:" },
                { role: "user", content:  JSON.stringify(items.rows) }
            ],
        });

        return openaiResponse.choices[0].message.content;
    } catch (error) {
        console.error("Error in fetchTaxiData:", error);
        return "An error occurred while fetching data.";
    }
}


