import 'dotenv/config'
import { runAgent } from './src/agent'
import { tools } from './src/tools'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

// LLM calling

// await addMessages([{ role: 'user', content: userMessage }])
// const history = await getMessages()

// const response = await runLLM({
//   messages: history,
// })

// console.log(response)

// Hardcoded Agent calling

// const weatherTool = {
//   name: 'get_current_weather',
//   description: 'Get the current weather',
//   parameters: z.object({
//     location: z.string(),
//   }),
// }

// const tools = [weatherTool]

// const response = await runAgent({ userMessage, tools })

// console.log(response)

// Agent calling

const response = await runAgent({ userMessage, tools })

console.log(response)
