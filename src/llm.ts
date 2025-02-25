import { zodFunction } from 'openai/src/helpers/zod.js'
import type { AIMessage } from '../types'
import { openai } from './ai'

export const runLLM = async ({
  messages,
  tools,
}: {
  messages: AIMessage[]
  tools?: any[]
}) => {
  const formattedTools = tools?.map(zodFunction)
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages,
    temperature: 0.1,
    tools: formattedTools,
    tool_choice: 'auto',
    parallel_tool_calls: false,
  })

  return response.choices[0].message
}
