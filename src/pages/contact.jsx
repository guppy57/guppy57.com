import Head from 'next/head';

import { SimpleLayout } from '@/components/SimpleLayout';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Drop a line - Armaan Gupta</title>
        <meta
          name="description"
          content="Contact me and drop a line, I'll be in touch!"
        />
      </Head>
      <SimpleLayout
        label="Contact me"
        title="Drop me a line"
        intro={null}
      />
    </>
  );
}
