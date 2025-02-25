import type OpenAI from 'openai'

const getWeather = (input: { userMessage: string; toolArgs: any }) => {
  return `hot, 90deg`
}

export const runTool = async (
  toolCall: OpenAI.Chat.Completions.ChatCompletionMessageToolCall,
  userMessage: string
) => {
  const input = {
    userMessage,
    toolArgs: JSON.parse(toolCall.function.arguments || '{}'),
  }

  switch (toolCall.function.name) {
    case 'get_current_weather':
      return getWeather(input)
    default:
      throw new Error(`Unknown tool: ${toolCall.function.name}`)
  }
}
