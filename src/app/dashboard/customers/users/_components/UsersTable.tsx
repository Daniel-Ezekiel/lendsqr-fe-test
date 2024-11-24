import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import styles from "@/app/_sass/table.module.scss";
import Link from "next/link";
import User from "@/app/_types/user.types";
import { EllipsisVerticalIcon } from "lucide-react";
import Button from "@/app/_components/Button";
import { DataTablePagination } from "./table-pagination";

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("personal_information", {
    id: "organization",
    header: () => <span>Organization</span>,
    cell: (info) => (
      <span className={styles.orgName}>{info.getValue()?.organization}</span>
    ),
  }),
  columnHelper.accessor((row) => row?.personal_information?.username, {
    id: "username",
    header: () => <span>Username</span>,
    cell: (info) => {
      return (
        <Link
          className={styles.tableLink}
          href={`/dashboard/customers/users/${info?.row?.original?.id - 1}`}
        >
          {info.getValue()}
        </Link>
      );
    },
  }),
  columnHelper.accessor("personal_information", {
    id: "email",
    header: () => <span>Email</span>,
    cell: (info) => <span>{info.renderValue()?.email_address}</span>,
  }),
  columnHelper.accessor("personal_information", {
    id: "phoneNumber",
    header: () => <span>Phone Number</span>,
    cell: (info) => <span>{info.renderValue()?.phone_number}</span>,
  }),
  columnHelper.accessor("personal_information", {
    id: "createdAt",
    header: "Date Joined",
    cell: (info) => <span>{info.renderValue()?.dateJoined}</span>,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => {
      return (
        <span
          className={`${styles.status} ${styles[info.renderValue() as string]}`}
        >
          {info.renderValue()}
        </span>
      );
    },
  }),
  columnHelper.accessor(() => "", {
    id: "options",
    header: "",
    cell: () => (
      <div className={styles.optionsContainer}>
        <Button type='button'>
          <EllipsisVerticalIcon color='#545f7d' />
        </Button>
      </div>
    ),
  }),
];

function UsersTable({ data }: { data: User[] }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className={styles.th}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className={styles.tbody}>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className={styles.tr}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={styles.td}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='h-4'>
        {
          <DataTablePagination
            table={table}
            // title={(tableFor as string) || currPage}
            count={data.length}
            hasNext={false}
            isFetchingNext={false}
            // handleGetNextPage={getNextPage}
          />
        }
      </div>
    </>
  );
}

export default UsersTable;
