import { type Table } from '@tanstack/react-table';

import { Input } from '@/components/ui/input';

type SelectionProps<TData> = {
  table: Table<TData>;
  children: React.ReactNode;
};

const PAGE_SIZE_OPTIONS = [
  {
    value: 20,
    label: '20개씩 보기',
  },
  {
    value: 50,
    label: '50개씩 보기',
  },
  {
    value: 100,
    label: '100개씩 보기',
  },
];

export const Selection = <TData,>({
  table,
  children,
}: SelectionProps<TData>) => {
  return (
    <>
      <div className="mb-2 flex items-center justify-between gap-2">
        <Input
          className="w-1/5"
          type="text"
          placeholder="Task name"
          value={(table.getColumn('task')?.getFilterValue() as string) ?? ''}
          onChange={(e) =>
            table.getColumn('task')?.setFilterValue(e.target.value)
          }
        />
        <select
          className="my-2 rounded-[4px] border-DEFAULT py-1 pl-2 pr-9 text-sm"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {PAGE_SIZE_OPTIONS.map(({ value, label }) => (
            <option key={label} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      {children}
    </>
  );
};
