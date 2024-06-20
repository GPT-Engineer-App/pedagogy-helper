import { Container, Text, VStack, Textarea, Button, Box, Select } from "@chakra-ui/react";
import { getFeedback } from '../api/openai';
import { useState } from "react";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [feedback, setFeedback] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = async () => {
    try {
      const feedbackResponse = await getFeedback(inputText);
      setFeedback(feedbackResponse);
    } catch (error) {
      setFeedback('Error fetching feedback. Please try again later.');
    }
  };

  return (
    <Container centerContent maxW="97%" p={2} height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%">
          <Text mb={2}>Select Genre</Text>
          <Select placeholder="Select genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="argumentative">Argumentative</option>
            <option value="descriptive">Descriptive</option>
            <option value="essay">Essay</option>
            <option value="instruction">Instruction</option>
          </Select>
        </Box>
        <Box width="100%">
          <Text mb={2}>Text input box</Text>
          <Textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your school homework text here..."
            size="md"
            height="200px"
          />
        </Box>
        <Button colorScheme="blue" onClick={handleSubmit}>Submit</Button>
        <Box width="100%">
          <Text mb={2}>Feedback output box</Text>
          <Textarea
            value={feedback}
            isReadOnly
            placeholder="Feedback will be displayed here..."
            size="md"
            height="200px"
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;