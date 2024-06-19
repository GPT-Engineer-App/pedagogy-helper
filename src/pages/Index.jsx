import { Container, Text, VStack, Textarea, Button, Box } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    // Placeholder for the submit action
    setFeedback("Feedback will be displayed here.");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
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