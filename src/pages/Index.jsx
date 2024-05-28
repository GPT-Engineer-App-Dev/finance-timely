import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Divider } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="#fff1e5" color="black" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" color="black">Home</Link>
            <Link href="#" color="black">World</Link>
            <Link href="#" color="black">Business</Link>
            <Link href="#" color="black">Tech</Link>
            <Link href="#" color="black">Markets</Link>
            <Link href="#" color="black">Opinion</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box bg="#fff1e5" py={10}>
        <Container maxW="container.md">
          <Heading as="h2" size="2xl" mb={4}>Breaking News: Market Hits Record Highs</Heading>
          <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
        </Container>
      </Box>

      {/* Featured Articles Section */}
      <Container maxW="container.xl" py={10}>
        <Heading as="h3" size="xl" mb={6}>Featured Articles</Heading>
        <Flex wrap="wrap" spacing={6}>
          <Box bg="#fff1e5" p={6} shadow="md" flex="1" m={2} minW="300px">
            <Heading as="h4" size="md" mb={2}>Article 1</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</Text>
          </Box>
          <Box bg="#fff1e5" p={6} shadow="md" flex="1" m={2} minW="300px">
            <Heading as="h4" size="md" mb={2}>Article 2</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</Text>
          </Box>
          <Box bg="#fff1e5" p={6} shadow="md" flex="1" m={2} minW="300px">
            <Heading as="h4" size="md" mb={2}>Article 3</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</Text>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box bg="#fff1e5" color="black" py={10}>
        <Container maxW="container.xl">
          <Flex justify="space-between" wrap="wrap">
            <Box>
              <Heading as="h5" size="sm" mb={4}>Contact Us</Heading>
              <Text>Email: contact@financialtimes.com</Text>
              <Text>Phone: +123 456 7890</Text>
            </Box>
            <Box>
              <Heading as="h5" size="sm" mb={4}>Follow Us</Heading>
              <HStack spacing={4}>
                <Link href="#" color="black"><FaTwitter /></Link>
                <Link href="#" color="black"><FaFacebook /></Link>
                <Link href="#" color="black"><FaLinkedin /></Link>
              </HStack>
            </Box>
            <Box>
              <Heading as="h5" size="sm" mb={4}>Quick Links</Heading>
              <VStack align="start">
                <Link href="#" color="black">About Us</Link>
                <Link href="#" color="black">Privacy Policy</Link>
                <Link href="#" color="black">Terms of Service</Link>
              </VStack>
            </Box>
          </Flex>
          <Divider my={6} borderColor="gray.700" />
          <Text textAlign="center">&copy; 2023 Financial Times. All rights reserved.</Text>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;