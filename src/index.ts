import { Context } from 'aws-lambda'

export const handler = async (context: Context) => {
  console.log(context)

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World'
    })
  }
}
