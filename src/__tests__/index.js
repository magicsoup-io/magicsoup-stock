import React, { Fragment } from 'react'
import renderer from 'react-test-renderer'
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from '../index'

it('imports magicsoup.io without errors', () => {
  const tree = renderer.create(
    <Fragment>
      <Box> I am a Box</Box>
      <Button> I am a Button</Button>
      <Card> I am a Card</Card>
      <Flex> I am a Flex</Flex>
      <Heading> I am a Heading</Heading>
      <Image src="https://source.unsplash.com/random/1280x720" />
      <Link href="http://www.example.com"> I am a Link</Link>
      <Text> I am a Text</Text>
    </Fragment>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
