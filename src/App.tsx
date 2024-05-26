import { useState } from 'react';

import { TableComponents } from '@/components/table';
import { columns } from '@/components/table/columns';
import { TableCaption } from '@/components/ui/table';
import DATA from '@/data';

function App() {
  const [data] = useState(DATA);

  return (
    <div className="h-screen w-screen">
      <div className="mx-auto w-[900px] pb-20 pt-10">
        <TableCaption className="mb-10 text-3xl font-bold">
          Tanstack Table
        </TableCaption>
        <TableComponents data={data} columns={columns} />
      </div>
    </div>
  );
}

export default App;
