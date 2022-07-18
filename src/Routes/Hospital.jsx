

// export default function Hospital(){
//     return (
//         <h2>Hospital</h2>
//     )
// }
import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";

// }
export default function Hospital(){

return(
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Hospital Data</TableCaption>
    <Thead>
      <Tr>
        <Th>Id</Th>
        <Th>Hospital</Th>
        <Th>Address</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1</Td>
        <Td>City Max</Td>
        <Td>Delhi</Td>
      </Tr>
      
      </Tbody>
  </Table>
</TableContainer>
)}