
import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";

export default function Doctor(){

return(
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Doctor Data</TableCaption>
    <Thead>
      <Tr>
        <Th>Id</Th>
        <Th>Name</Th>
        <Th>Hospital</Th>
        <Th>Specialization</Th>
        <Th>Salary</Th>
        <Th>Details</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1</Td>
        <Td>Ramesh</Td>
        <Td>City Max</Td>
        <Td>General</Td>
        <Td>Salary</Td>
        <Td>Details</Td>
      </Tr>
      
      </Tbody>
  </Table>
</TableContainer>
)}