import { TreeGridOptions, TreeNode } from './types'

type HeaderProps<T extends TreeNode> = {
  options: TreeGridOptions<T>
}

export default function Header<T extends TreeNode>({ options }: HeaderProps<T>) {
  return (
    <thead>
      <tr>
        {options.fields.map((field, index) => {
          if (field.property === 'children') {
            return null
          }

          return (
            <th style={{ width: field.width }} key={`header_${String(field.property)}_${index}`}>
              {field.displayName}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}
