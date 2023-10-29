import { Box, Button, HStack, Heading, Input, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend,AiFillGithub,AiFillLinkedin } from 'react-icons/ai';
const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.800 '} minH={'1'} p={'10'} color={'white'}>
            <Stack direction={['column', 'row']} >
                <VStack alignItems={'stretch'} w={'full'} >
                    <Heading size={'md'} textTransform={'uppercase'}>
                        Get Updates Here
                    </Heading>

                <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input placeholder='Enter your emil..' border={'none'} outline={'none'} color={'white'} focusBorderColor='none' />
                    <Button p={'0'} colorScheme='purple' variant={'solid'} borderRadius={'0 20px 20px 0 '}>
                        <AiOutlineSend size={'20'} />
                    </Button>
                </HStack>
                </VStack>
                <VStack  w={'full'} borderLeft={['none','1px solid white']}
                 borderRight={['none','1px solid white']}
                 >
                    <Heading>
                        Game Hub
                    </Heading>
                    <Text>All right Reserved</Text>
         
                </VStack>
                <VStack w={'full'}  >
                    <Heading size={'md'} textTransform={'uppercase'}>
                        Social Media
                    </Heading>
                    <Button variant={'link'} colorScheme='purpe'>
                        <VStack>
                            
                        <a size={'20'}  target='_blank' href="https://github.com/satyampayal"><AiFillGithub/> </a>
                        <a size={'20'}   target='_blank' href="https://www.linkedin.com/in/satyam-payal-9b9498262/"> <AiFillLinkedin/></a>
                        </VStack>
                    </Button>

                </VStack>

            </Stack>
        </Box>
    )
}

export default Footer