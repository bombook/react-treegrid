'use client'

import { useEffect, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Row from './Row'
import { TreeGridOptions, TreeNode } from './types'

type BodyProps<T extends TreeNode> = {
  data: T[]
  options: TreeGridOptions<T>
}

export default function Body<T extends TreeNode>({ data, options }: BodyProps<T>) {
  const flattenArray = (dataArray: T[], parent?: TreeNode, returnArray: T[] = []): T[] => {
    const parentNode = parent ?? {}

    if (parentNode._showChildren === false) {
      return returnArray
    }

    const level = parentNode._level === undefined ? 0 : parentNode._level + 1

    dataArray.forEach((element) => {
      const elemToAdd = {
        ...element,
        _hasChildren: Boolean(element.children && element.children.length > 0),
        _level: level,
        _parent: parentNode._key,
        _key: element._key ?? uuidv4(),
        _showChildren: element._showChildren ?? false,
        _visible: parentNode._showChildren ?? true,
      } as T

      returnArray.push(elemToAdd)
    })

    return returnArray
  }

  const [dataToDisplay, setDataToDisplay] = useState<T[]>(() => flattenArray(data))

  useEffect(() => {
    setDataToDisplay(flattenArray(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const indexOfProperty = (array: T[], property: string, value: string): number => {
    return array.findIndex((item) => String((item as Record<string, unknown>)[property]) === value)
  }

  const removeChildren = (array: T[], key: string) => {
    let childrenIndex = indexOfProperty(array, '_parent', key)

    while (childrenIndex !== -1) {
      removeChildren(array, String(array[childrenIndex]._key))
      array.splice(childrenIndex, 1)
      childrenIndex = indexOfProperty(array, '_parent', key)
    }
  }

  const clickHandler = (key: string, index: number) => {
    const tempState = [...dataToDisplay]
    const current = tempState[index]

    current._showChildren = !current._showChildren

    if (current._showChildren && current.children) {
      const flattened = flattenArray(current.children as T[], current)
      tempState.splice(index + 1, 0, ...flattened)
    } else {
      removeChildren(tempState, key)
    }

    setDataToDisplay(tempState)
  }

  const rows = useMemo(
    () =>
      dataToDisplay.map((elem, index) => (
        <Row
          key={`row_${String(elem._key)}_${index}`}
          options={options}
          data={elem}
          level={elem._level ?? 0}
          index={index}
          onClick={clickHandler}
        />
      )),
    [dataToDisplay, options],
  )

  return <tbody>{rows}</tbody>
}
