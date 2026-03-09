import { ReactNode } from 'react'

export type TreeNode = Record<string, unknown> & {
  children?: TreeNode[]
  _key?: string
  _level?: number
  _parent?: string
  _showChildren?: boolean
  _hasChildren?: boolean
}

export type FieldOption<T extends TreeNode = TreeNode> = {
  property: keyof T | 'children'
  displayName: string
  width?: number | string
  format?: (value: unknown) => ReactNode
}

export type TreeGridOptions<T extends TreeNode = TreeNode> = {
  fields: Array<FieldOption<T>>
}
