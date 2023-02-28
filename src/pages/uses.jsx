import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Armaan Gupta</title>
        <meta
          name="description"
          content="Tools I use to build software, design products, and have fun."
        />
      </Head>
      <SimpleLayout
        label="What I use"
        title="Tools I use to build software, design products, and have fun."
        intro="I don't think anyone besides my fellow developer friends care about what tools I use, but I'm going to share them anyways. I hope you find something new and useful here!"
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, Intel 16GB RAM (2019)">
              I've been blessed to have such a supporting Grandmother who helped
              me purchase my favorite laptop ever when I started at Iowa State
              University. My MacBook is probably more important to me than my
              phone or the Mazda.
            </Tool>
            <Tool title="Keychron K2 for Mac">
              When you spend hours on end on the keyboard, it&apos;s important
              to have one that makes you smile. My Keychron K2 literally lets me
              glide across the board.
            </Tool>
            <Tool title="Logitech G604">
              I&apos;m a big fan of the Logitech G604. It&apos;s a wireless
              mouse that has a six programmable micros, and believe me, I've set
              them up. Without having to move my mouse I can access my tasks,
              calendar, and Spotify.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              Originally, I refused to use VS Code because I was a die-hard
              Webstorm fan and couldn't stand how much RAM VSCode was used
              (because it is an Electron app after all). But after working at
              John Deere and having to use it, I fell in love.
            </Tool>
            <Tool title="Postman">
              By far one of my most favorite tools, Postman is a must-have for
              any web developer. I use it to test all my APIs, create basic
              documentation, and share my tests with other team members. Once
              you have Postman setup, you will fly when building any API.
            </Tool>
            <Tool title="DataGrip">
              Thank God for the JetBrains Student License, I love using DataGrip
              to manage and view my databases. It&apos;s a bit chunky, but I
              feel powerful when I use it.
            </Tool>
            <Tool title="XCode">
              This one&apos;s not by choice. I love Apple, but they sure do know
              how to lock you in. I'm forced to use XCode to develop mac apps,
              but that&apos;s about it.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              When I started my journey into technology, I had a Windows
              machine. I wanted Sketch, but literally couldn&apos;t download it.
              So I started using Figma. Even now that I have a MacBook and tried
              Sketch, Figma has my heart.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Raycast">
              Say goodbye to Spotlight. Raycast has been a game-changer for me.
              I use my applications launcher on my mac almost every couple
              minutes, and Raycast does that so well, and even provides other
              tools. I can use a calculator, open Google Drive files, start a
              timer, and even add tasks to my issue tracker in a single
              keystroke.
            </Tool>
            <Tool title="Things 3">
              I have been using Things 3 since I purchased my MacBook, it was
              the first app and task manager I paid for. It is completely worth
              the $50. Period.
            </Tool>
            <Tool title="Linear">
              My business runs on Linear. I use it to manage my projects, tasks,
              roadmaps, and deadlines. This has been the one application that
              has transformed my workflow and productivity in a huge way. Linear
              promotes focusing on what&apos;s important and moving fast.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
