import TreeGrid from '@/components/treegrid/TreeGrid'
import { sampleData, treeGridOptions } from '@/data/sampleData'

export default function HomePage() {
  return (
    <main className="page">
      <section className="container">
        <h1>React TreeGrid (Next.js App Router)</h1>
        <TreeGrid data={sampleData} options={treeGridOptions} />
      </section>
    </main>
  )
}
