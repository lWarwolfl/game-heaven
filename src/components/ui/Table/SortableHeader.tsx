import type { Column } from '@tanstack/react-table'

import {
  SolarAltArrowDownLineDuotone,
  SolarAltArrowUpOutline,
  SolarCheckCircleLinear,
} from '@/components/icons'
import { cn } from '@/lib/utils'

interface SortableHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export function SortableHeader<TData, TValue>({
  column,
  title,
  className,
}: SortableHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  return (
    <div className={cn('flex h-full flex-col items-center space-x-2', className)}>
      <button
        className={cn(
          '-ml-3 flex h-full text-xs uppercase data-[state=open]:bg-primary/10',
          column.getIsSorted() && 'bg-primary/10'
        )}
      >
        <span>{title}</span>
      </button>

      <div onClick={() => column.toggleSorting(false)}>
        <SolarAltArrowUpOutline className="h-3.5 w-3.5 text-muted-foreground/70" />
        Asc
      </div>
      <div onClick={() => column.toggleSorting(true)}>
        <SolarAltArrowDownLineDuotone className="h-3.5 w-3.5 text-muted-foreground/70" />
        Desc
      </div>
      <div onClick={() => column.clearSorting()}>
        <SolarCheckCircleLinear className="h-3.5 w-3.5 text-muted-foreground/70" />
        Remove
      </div>
    </div>
  )
}
