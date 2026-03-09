import { TreeGridOptions, TreeNode } from '@/components/treegrid/types'

type Item = TreeNode & {
  name: string
  qty: number
}

export const sampleData: Item[] = [
  {
    name: 'item 1',
    qty: 2,
    children: [
      {
        name: 'item 1.1',
        qty: 1,
      } as Item,
    ],
  },
  {
    name: 'item 2',
    qty: 4,
  },
]

export const treeGridOptions: TreeGridOptions<Item> = {
  fields: [
    {
      property: 'name',
      displayName: 'Name',
      width: '70%',
    },
    {
      property: 'qty',
      displayName: 'Quantity',
      format: (value) => Number(value).toFixed(2),
    },
  ],
}
