'use client'

import { Table } from '@/components/ui/Table/Table'
import { columns } from '@/data/columns'
import { projects } from '@/data/table'

export default function TableComponent() {
  return <Table columns={columns} data={projects} />
}
