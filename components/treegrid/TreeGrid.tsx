import Body from './Body'
import Header from './Header'
import { TreeGridOptions, TreeNode } from './types'

type TreeGridProps<T extends TreeNode> = {
  data: T[]
  options: TreeGridOptions<T>
  loading?: boolean
}

export default function TreeGrid<T extends TreeNode>({ data, options, loading = false }: TreeGridProps<T>) {
  if (loading) {
    return <div />
  }

  return (
    <table className="tree-table">
      <Header options={options} />
      <Body data={data} options={options} />
    </table>
  )
}
