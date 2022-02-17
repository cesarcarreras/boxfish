import React from 'react';
import { useState } from 'react';
import { CloseIcon, HamburgerIcon, MoonIcon } from '@chakra-ui/icons'
import { Image, Text,Flex, Button, Switch, IconButton, useColorMode, Divider, Circle } from '@chakra-ui/react';
import logo from '../../assets/images/LOGO.svg';


const Navbar = () => {

    const [display, changeDisplay] = useState('none');

    const {colorMode, toggleColorMode} = useColorMode();

    const isDark = colorMode === 'dark'


    return(
        <Flex direction='column'>
            <Flex direction='row' alignItems='center' mt='17px'>

                <Flex w='full' display={['none', 'none', 'flex', 'flex']}>
                    <Flex align='center' >
                    <Image src={logo} alt='BoxFish logo' w='105px' h='50px' ml='44px'/>
                    <Flex display={['none', 'none', 'none', 'flex']}>
                    <Text as="a" variant='link' m={5} w="100%" color='navText.100' fontSize={12}>
                            info@boxfish.studio
                        </Text>
                        <Text as="a" variant='link' m={5} w="100%" color='navText.100' fontSize={12}>
                            +34 910 615212
                        </Text>
                        </Flex>
                    </Flex>
                </Flex>


                <Flex position="absolute" display={['none', 'none', 'flex', 'flex']}  w='full' justify='flex-end' px={16}>
                        <Flex>
                            <Button as="a" variant='link' m='42px' w="100%" color='navText.100' fontSize='14px'>
                                Services
                            </Button>
                        </Flex>
                        <Flex>
                            <Button as="a" variant='link' m='42px' w="100%" color='navText.100' fontSize='14px'>
                                About us
                            </Button>
                        </Flex>
                        <Flex>
                            <Button as="a" variant='link' m='42px' w="100%" color='navText.100' fontSize='14px'>
                                Career
                            </Button>
                        </Flex>
                        <Flex>
                            <Button as="a" variant='link' m='42px' w="100%" color='navText.100' fontSize='14px'>
                                Work
                            </Button>
                        </Flex>
                 </Flex>


                <Flex display={['flex', 'flex', 'none', 'none']} direction='column' w='full' align='center'>
                    <Flex w='full' justify='space-between'>
                        <Image src={logo} alt='BoxFish logo' w='150px' h='50px' px={5}/>
                        <Flex align='center'>
                        <IconButton size="lg" mr={2} icon={<HamburgerIcon />}  onClick={() => changeDisplay('flex')}/> Menu
                        <Switch colorScheme='teal' isChecked={isDark} onChange={toggleColorMode} mr={10} ml={2}/>
                        </Flex>
                    </Flex>

                    <Flex w='full'>
                        <Divider color='black' mt='17px' mb='17px'/>
                    </Flex>

                    <Flex align='center'>
                        <Text as="a" variant='link' m={5} w="100%" color='navText.100' fontSize={12}>
                            info@boxfish.studio
                        </Text>
                          <Circle size='5px' bg='tomato'/>
                        <Text as="a" variant='link' m={5} w="100%" color='navText.100' fontSize={12}>
                            +34 910 615212
                        </Text>
                    </Flex>
                </Flex>


                <Flex display={['none', 'none', 'flex', 'flex']}>
                    <Switch colorScheme='teal' size='sm' isChecked={isDark} onChange={toggleColorMode} mr={2} display={['none', 'none', 'flex', 'flex']} />
                    <MoonIcon w={4} h={4} mr={10}/>
                </Flex>


                <Flex w='100vw' bgColor='gray.50' zIndex={20} h='100vh' pos='fixed' top='0' left='0' overflowY='auto' direction='column' display={display}>
                    <Flex justify='flex-end'>
                        <IconButton mt={2} mr={2} size='lg' icon={<CloseIcon/>} onClick={() => changeDisplay('none')}/>
                    </Flex>
                    <Flex direction='column' align='center'>
                        <Button as='a' variant='link' m={5} w='100%'>
                            Services
                        </Button>

                        <Button as='a' variant='link' m={5} w='100%'>
                            About us
                        </Button>

                        <Button as='a' variant='link' m={5} w='100%' >
                            Career
                        </Button>

                        <Button as='a' variant='link' m={5} w='100%'>
                            Work
                        </Button>
                     </Flex>
                </Flex>

            </Flex>
            <Divider color='black' mt='17px' mb='17px'/>
        </Flex>
    );
};

export default Navbar;