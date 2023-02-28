import { Container } from '@/components/Container'

export function SimpleLayout({ label, title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <div className='mb-6'>
          <span className="text-sm font-normal bg-purple-100 py-2 px-4 rounded-2xl text-purple-600">{label}</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
