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

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("orgName", {
    id: "orgName",
    header: () => <span>Organization</span>,
    cell: (info) => (
      <span className={styles.orgName}>
        {info.getValue().split("-").join(" ")}
      </span>
    ),
  }),
  columnHelper.accessor((row) => row.userName, {
    id: "userName",
    header: () => <span>Username</span>,
    cell: (info) => {
      console.log(info);
      return (
        <Link
          className={styles.tableLink}
          href={`/dashboard/customers/users/${info.row.original.id}`}
        >
          {info.getValue()}
        </Link>
      );
    },
  }),
  columnHelper.accessor("email", {
    id: "email",
    header: () => <span>Email</span>,
    cell: (info) => <span>{info.renderValue()}</span>,
  }),
  columnHelper.accessor("phoneNumber", {
    id: "phoneNumber",
    header: () => <span>Phone Number</span>,
    cell: (info) => <span>{info.renderValue()}</span>,
  }),
  columnHelper.accessor("createdAt", {
    id: "createdAt",
    header: "Date Joined",
    cell: (info) => <span>{info.renderValue()}</span>,
  }),
  columnHelper.accessor("lastActiveDate", {
    header: "Status",
    cell: (info) => {
      const statusArr = [
        "active",
        "inactive",
        "blacklisted",
        "pending",
        info.renderValue(),
      ];
      const selectedStatus = statusArr[Math.floor(Math.random() * 4)];

      return (
        <span
          className={`${styles.status} ${styles[selectedStatus as string]}`}
        >
          {selectedStatus}
        </span>
      );
    },
  }),
  columnHelper.accessor(() => "", {
    id: "options",
    header: "",
    cell: () => (
      <Button type='button'>
        <EllipsisVerticalIcon color='#545f7d' />
      </Button>
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
        {/* <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
      <div className='h-4' />
    </div>
  );
}

export default UsersTable;
