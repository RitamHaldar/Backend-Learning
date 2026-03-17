import { tavily } from "@tavily/core"
export async function websearch({ query }) {
    const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });
    const response = await tvly.search(query, {
        maxResults: 1,
        searchDepth: "basic",
        timeRange: "day"
    });
    return response.results[0].content;

}