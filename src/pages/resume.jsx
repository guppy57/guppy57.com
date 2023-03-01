import Head from 'next/head';

import { SimpleLayout } from '@/components/SimpleLayout';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume - Armaan Gupta</title>
        <meta
          name="description"
          content="Meaningul experiences, while still having a great time."
        />
      </Head>
      <SimpleLayout
        label="My resume"
        title="Meaningful experiences, while still having a great time"
        
      >
        <div class="grid grid-cols-9">
          <div class="col-span-6">
            <h1 class="text-3xl font-bold">Armaan Gupta</h1>
            <h2 class="text-2xl font-bold">Software Engineer</h2>
            <h3 class="text-2xl font-bold">Iowa State University</h3>
            <h4 class="text-2xl font-bold">Ames, IA</h4>
          </div>
          <div class="col-span-3">
            <h1 class="text-3xl font-bold">Contact</h1>
            </div>
        </div>
      </SimpleLayout>
    </>
  )
}