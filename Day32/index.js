import readline from "readline/promises"
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage, tool, createAgent, SystemMessage } from "langchain"
import "dotenv/config"
import { sendmail } from "./mail.service.js"
import * as z from "zod"
import { websearch } from "./websearch.service.js";




const model = new ChatMistralAI({
    apiKey: process.env.MISTRAL_API_KEY,
    modelName: "mistral-small",
});


const mailtool = tool(
    sendmail,
    {
        name: "sendmail",
        description: "send mail to the user",
        schema: z.object({
            to: z.string().describe("the email to which the email is to be sent"),
            subject: z.string().describe("The subject of the mail to be sent "),
            html: z.string().describe("the html content of the mail to be sent")
        })
    }
)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const searchTool = tool(
    websearch,
    {
        name: "search",
        description: "Search the web for real-time information",
        schema: z.object({
            query: z.string().describe("The search query")
        })
    }
)

const agent = createAgent({
    model,
    tools: [mailtool, searchTool]
})
let messages = []
while (true) {
    const question = await rl.question("User:")
    messages.push(new HumanMessage(question))

    const response = await agent.invoke({ messages });

    messages.push(response.messages[response.messages.length - 1]);
    console.log(response.messages[response.messages.length - 1].content)
}
rl.close();

