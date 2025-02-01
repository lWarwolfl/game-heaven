'use client'

import { cn, fuzzyFilter } from '@/lib/utils'
import {
  type ColumnDef,
  type Row,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useDeferredValue, useEffect, useState } from 'react'

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function Table<TData, TValue>({ data, columns }: DataTableProps<TData, TValue>) {
  const [searchInput, setSearchInput] = useState('')
  const deferredSearchInput = useDeferredValue(searchInput)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    filterFns: {
      fuzzy: fuzzyFilter<TData>(),
    },
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getRowCanExpand: () => true,
    enableRowSelection: true,
  })

  useEffect(() => {
    table.setGlobalFilter(deferredSearchInput)
  }, [deferredSearchInput, table])

  return (
    <>
      <div className="mt-10 flex w-full justify-center">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          width="300px"
          height="300px"
          placeholder="Search..."
          className="border-2 border-gray-500"
        />
      </div>

      <table
        className={cn(
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
                'py-4',
                'text-body_lg text-gray800 rounded-e-lg',
                index % 2 === 0 ? 'bg-gray100' : ''
              )}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={cn('px-2', 'py-3', 'first:rounded-r-md', 'last:rounded-l-md')}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
