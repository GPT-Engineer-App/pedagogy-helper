import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://api.gptengineer.app/openai',
  dangerouslyAllowBrowser: true,
  apiKey: 'random-string-123456',
});

export const getFeedback = async (inputText) => {
  const messages = [
    {
      role: 'system',
      content: `You are a helpful assistant that provides feedback on genre pedagogy for educational texts. Ensure the feedback always follows this format:

# Genre correctness
[feedback]

# Text flow
[feedback]

# Correctness
[feedback]

# Conclude for next steps
[feedback]`,
    },
    {
      role: 'user',
      content: inputText,
    },
  ];

  try {
    const response = await openai.chat.completions.create({
      messages,
      model: 'gpt-3.5-turbo',
      stream: false,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching feedback:', error);
    throw new Error('Failed to fetch feedback from OpenAI API');
  }
};