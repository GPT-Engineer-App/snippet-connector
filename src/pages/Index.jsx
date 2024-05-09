import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

const UserProfileCard = ({ user }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md">
      <VStack spacing={4}>
        <Image borderRadius="full" boxSize="150px" src={user.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZWZhdWx0JTIwdXNlciUyMGF2YXRhcnxlbnwwfHx8fDE3MTUyNTA2NDR8MA&ixlib=rb-4.0.3&q=80&w=1080"} alt={user.name} fallbackSrc={<FaUserCircle size="150px" />} />
        <Text fontWeight="bold" fontSize="xl">
          {user.name}
        </Text>
        <Text fontSize="md">{user.position}</Text>
        <Text fontSize="sm" color="gray.500">
          {user.email}
        </Text>
      </VStack>
    </Box>
  );
};

export default UserProfileCard;
