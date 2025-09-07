import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { transcript } = await request.json()

    if (!transcript || transcript.trim().length === 0) {
      return NextResponse.json(
        { error: 'Transcript is required' },
        { status: 400 }
      )
    }

    const apiKey = process.env.OPENROUTER_API_KEY

    if (!apiKey) {
      console.error('OpenRouter API key not found')
      return NextResponse.json(
        { error: 'API configuration error. Please check environment variables.' },
        { status: 500 }
      )
    }

    const prompt = `Please analyze the following meeting transcript and provide a comprehensive summary with the following structure:

## Meeting Summary

**Key Discussion Points:**
- [List the main topics discussed]

**Important Decisions Made:**
- [List any decisions that were made]

**Action Items:**
- [List specific tasks assigned with responsible parties if mentioned]

**Key Participants & Contributions:**
- [Notable contributions from participants]

**Next Steps:**
- [Any planned follow-up actions or meetings]

**Additional Notes:**
- [Any other important information]

Meeting Transcript:
${transcript}

Please provide a clear, professional summary that captures the essential information from this meeting.`

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        'X-Title': 'AI Meeting Summarizer'
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3.1-8b-instruct',
        messages: [
          {
            role: 'system',
            content: 'You are an expert meeting summarizer. Your job is to create clear, structured summaries of meeting transcripts that highlight key decisions, action items, and important discussion points.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 1500,
        temperature: 0.7
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('OpenRouter API error:', response.status, errorText)
      
      if (response.status === 401) {
        return NextResponse.json(
          { error: 'API authentication failed. Please check your API key configuration.' },
          { status: 401 }
        )
      }
      
      return NextResponse.json(
        { error: `API request failed: ${response.status}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error('Unexpected API response structure:', data)
      return NextResponse.json(
        { error: 'Invalid response from AI service' },
        { status: 500 }
      )
    }

    const summary = data.choices[0].message.content

    return NextResponse.json({ summary })

  } catch (error) {
    console.error('Error in summarize API:', error)
    return NextResponse.json(
      { error: 'Internal server error occurred while processing your request' },
      { status: 500 }
    )
  }
}
