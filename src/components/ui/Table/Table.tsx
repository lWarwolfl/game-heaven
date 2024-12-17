'use client'

import { cn } from '@/lib/utils'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
  type Row,
} from '@tanstack/react-table'

export interface TableProps<TData extends object, TValue> {
  data: TData[]
  columns: ColumnDef<TData, TValue>[]
  fixed?: boolean
  className?: string
}

export const Table = <TData extends object, TValue>({
  data,
  columns,
  fixed,
  className,
}: TableProps<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <table
      className={cn(
        fixed && 'table-fixed',
        'max-h-[100px]',
        'w-full',
        'border-separate',
        'border-spacing-y-3',
        'rounded-150',
        'bg-gray50',
        'p-4',
        'text-sm'
      )}
    >
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className={cn(
                  'bg-gray50 w-auto border-b py-4',
                  'px-1',
                  'text-title_md text-gray800 text-right',
                  'capitalize',
                  'first:rounded-r-md',
                  'last:rounded-l-md'
                )}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="">
        {table.getRowModel().rows.map((row: Row<TData>, index) => (
          <tr
            key={row.id}
            className={cn(
              className,
              'py-4',
              'text-body_lg text-gray800 rounded-e-lg',
              index % 2 === 0 ? 'bg-gray100' : ''
            )}
          >
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className={cn(
                  fixed && 'truncate',
                  'px-2',
                  'py-3',
                  'first:rounded-r-md',
                  'last:rounded-l-md'
                )}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
