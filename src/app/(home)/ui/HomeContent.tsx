'use client'

import { AppFeature } from './AppFeature'
import { AppHero } from './AppHero'

export default function HomeContent() {
  return (
    <>
      <AppHero />
      <AppFeature
        title='Integrate effortlessly with any technology stack'
        description='Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon.'
      />
    </>
  )
}
