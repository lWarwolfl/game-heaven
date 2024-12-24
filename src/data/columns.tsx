'use client'

import { SortableHeader } from '@/components/ui/Table/SortableHeader'
import type { Project } from '@/data/table'
import type { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => <SortableHeader column={column} title="#" />,
    cell: ({ row }) => <div className="max-w-xl">{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'project_manager',
    header: () => <span>name</span>,
    cell: ({ row }) => <div className="max-w-xl">{row.getValue('project_manager')}</div>,
  },
]
