'use client'

import { Container, Divider, Space, Text, Title } from '@mantine/core'


export default function AboutContent({ data }: any) {
  return (
    <Container size='lg' mt={65}>
      <Title order={3}>เกี่ยวกับเรา</Title>
      <Divider mt={5} />
      <Text fz={'sm'}>{data.data.version}</Text>
      <Text fz={'sm'}>{JSON.stringify(data)}</Text>
      <Space h='md' />
    </Container>
  )
}
