import type { Meta, StoryObj } from '@storybook/react'
import type { ColumnDef } from '@tanstack/react-table'
import { Table, type TableProps } from './Table'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
}

export default meta

type Story<TData extends object, TValue> = StoryObj<TableProps<TData, TValue>>

// Sample data
interface User {
  id: number
  name: string
  email: string
  role: string
}

const userData: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User' },
]

const columns: ColumnDef<User, unknown>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
]

// Base story
export const Default: Story<User, unknown> = {
  args: {
    data: userData,
    columns: columns,
  },
}

// Fixed width story
export const FixedWidth: Story<User, unknown> = {
  args: {
    ...Default.args,
    fixed: true,
  },
}

// Custom class story
export const CustomClass: Story<User, unknown> = {
  args: {
    ...Default.args,
    className: 'bg-blue-100',
  },
}

// Empty table story
export const EmptyTable: Story<User, unknown> = {
  args: {
    data: [],
    columns: columns,
  },
}

// Many rows story
export const ManyRows: Story<User, unknown> = {
  args: {
    data: Array(20)
      .fill(null)
      .map((_, index) => ({
        id: index + 1,
        name: `User ${index + 1}`,
        email: `user${index + 1}@example.com`,
        role: index % 3 === 0 ? 'Admin' : index % 3 === 1 ? 'Editor' : 'User',
      })),
    columns: columns,
  },
}

// Custom cell rendering
const columnsWithCustomCell: ColumnDef<User, unknown>[] = [
  ...columns,
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: () => (
      <button className="rounded bg-blue-500 px-2 py-1 font-bold text-white hover:bg-blue-700">
        Edit
      </button>
    ),
  },
]

export const CustomCellRendering: Story<User, unknown> = {
  args: {
    data: userData,
    columns: columnsWithCustomCell,
  },
}
