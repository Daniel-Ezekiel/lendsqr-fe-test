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
import {
  EllipsisVerticalIcon,
  EyeIcon,
  UserRoundCheckIcon,
  UserRoundXIcon,
} from "lucide-react";
import Button from "@/app/_components/Button";
import { DataTablePagination } from "./table-pagination";
import ThCell from "./ThCell";

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("personal_information.organization", {
    id: "organization",
    header: () => <ThCell cellTitle='Organization' />,
    cell: (info) => <span className={styles.orgName}>{info.getValue()}</span>,
  }),
  columnHelper.accessor("personal_information.username", {
    id: "username",
    header: () => <ThCell cellTitle='Username' />,
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
  columnHelper.accessor("personal_information.email_address", {
    id: "email_address",
    header: () => <ThCell cellTitle='Email' />,
    cell: (info) => <span>{info.renderValue()}</span>,
  }),
  columnHelper.accessor("personal_information.phone_number", {
    id: "phone_number",
    header: () => <ThCell cellTitle='Phone Number' />,
    cell: (info) => <span>{info.renderValue()}</span>,
  }),
  columnHelper.accessor("personal_information.dateJoined", {
    id: "dateJoined",
    header: () => <ThCell cellTitle='Date Joined' />,
    cell: (info) => <span>{info.renderValue()}</span>,
  }),
  columnHelper.accessor("status", {
    id: "status",
    header: () => <ThCell cellTitle='Status' />,
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
  columnHelper.display({
    id: "options",
    cell: () => {
      let showOptions: boolean = false;

      return (
        <div className={`${styles.optionsContainer}`}>
          <Button
            type='button'
            className={`${styles.optionsButton}`}
            onClick={() =>
              showOptions ? (showOptions = false) : (showOptions = true)
            }
          >
            <EllipsisVerticalIcon color='#545f7d' />
          </Button>

          <div
            className={`${styles.optionMenuContainer} ${
              showOptions && styles.active
            }`}
          >
            <Button type='button' className={`${styles.optionMenuButton}`}>
              <EyeIcon size={20} />
              View Details
            </Button>
            <Button type='button' className={`${styles.optionMenuButton}`}>
              <UserRoundXIcon size={20} />
              Blacklist User
            </Button>
            <Button type='button' className={`${styles.optionMenuButton}`}>
              <UserRoundCheckIcon size={20} />
              Activate User
            </Button>
          </div>
        </div>
      );
    },
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
