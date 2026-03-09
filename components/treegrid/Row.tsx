import { TreeGridOptions, TreeNode } from './types'

const LEVEL_OFFSET = 16

type RowProps<T extends TreeNode> = {
  data: T
  level: number
  index: number
  options: TreeGridOptions<T>
  onClick: (key: string, index: number) => void
}

export default function Row<T extends TreeNode>({ data, level, index, options, onClick }: RowProps<T>) {
  if (data._visible === false) {
    return null
  }

  const clickHandler = () => {
    if (data._hasChildren && data._key) {
      onClick(data._key, index)
    }
  }

  const getContent = (property: keyof T | 'children', format?: (value: unknown) => React.ReactNode) => {
    if (property === 'children') {
      return null
    }

    const value = data[property]
    if (format) {
      return format(value)
    }

    return value === null || value === undefined ? '' : String(value)
  }

  return (
    <tr>
      {options.fields.map((field, i) => {
        if (field.property === 'children') {
          return null
        }

        return (
          <td key={`${String(data._key)}_${String(field.property)}_${i}`}>
            {i === 0 ? <span className="treegrid-indent" style={{ width: level * LEVEL_OFFSET }} /> : null}
            {i === 0 ? (
              <span className="treegrid-expander" onClick={clickHandler}>
                {data._hasChildren ? (data._showChildren ? '−' : '+') : ''}
              </span>
            ) : null}
            {getContent(field.property, field.format)}
          </td>
        )
      })}
    </tr>
  )
}
