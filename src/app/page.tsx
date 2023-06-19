import { useState } from 'react';

export default function Home() {
  const [tabState, set_tabState] = useState<'single' | 'multi'>('single');
  return <main></main>;
}
