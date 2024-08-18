import * as React from 'react'
import{
Text,
Box,
Center,
VStack,
themeTools,
useTheme,
useColorMode,
useColorModeValue
} from 'native-base'
import ThemeToggle from '../componets/theme-toggle'
import AnimatedCheckbox from '../componets/animated-checkbox'

export default function MainScreen() {
    return(
        <Center _dark={{bg: 'blueGray.900'}} _light={{bg: 'blueGray.50'}} px={4} flex={1}>
            <VStack space={5} alignItems="Center">
                <Box w="100px" h="100px">
                    <AnimatedCheckbox/>
                </Box>
            <Box><Text>Hello</Text></Box>
            <ThemeToggle/>
            </VStack>
        </Center>
    )
}