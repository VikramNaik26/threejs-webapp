import express from 'express'
import * as dotenv from 'dotenv'
import { OpenAI } from 'openai'

dotenv.config()

const router = express.Router()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello form DALL.E 2.0' })
})

router.route('/').post(async (req, res) => {
  try {
    const prompt = req.body

    const response = await openai.createImage({
      //   model: 'dall-e-2',
      prompt,
      n: 1,
      size: '1024x1024', // Specify the desired image size
      response_format: 'url', // You can also use 'url' or 'json'
    })

    imageUrl = response.data.data[0].url
    // image = response.data.data[0].b64_json
    // const imageUrl = response.choices[0].image

    res.status(200).json({ photo: imageUrl })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong', error: error })
  }
})

export default router
