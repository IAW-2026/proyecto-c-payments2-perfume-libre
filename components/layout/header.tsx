import { UserButton } from '@clerk/nextjs'

export function Header() {
  return (
    <header className="flex h-16 items-center justify-end gap-4 p-4">
      <UserButton />
    </header>
  )
}