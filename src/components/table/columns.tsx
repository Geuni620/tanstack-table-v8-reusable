import { type ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';

type Status = {
  id: number;
  name: string;
};

type ColumnDataProps = {
  task: string;
  status: Status;
  due?: Date | null;
  notes: string;
  done: boolean;
};

export const columns: ColumnDef<ColumnDataProps>[] = [
  {
    accessorKey: 'done',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    size: 50,
  },
  {
    accessorKey: 'task',
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-center"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Task
        <ArrowUpDown className="ml-2 size-4" />
      </div>
    ),
    cell: ({ row }) => {
      return <div>{row.getValue('task')}</div>;
    },
  },
  {
    accessorKey: 'statusName',
    header: 'Status',
    cell: ({ row }) => <p>{row.getValue('statusName')}</p>,
    enableSorting: false,
  },
  {
    accessorKey: 'due',
    header: 'Due',
    cell: ({ row }) => <p>{row.getValue('due')}</p>,
    enableSorting: false,
  },
  {
    accessorKey: 'notes',
    header: 'Notes',
    cell: ({ row }) => <p>{row.getValue('notes')}</p>,
    enableSorting: false,
  },
];
