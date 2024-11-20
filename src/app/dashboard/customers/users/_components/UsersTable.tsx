import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import styles from "@/app/sass/table.module.scss";
import Link from "next/link";

type User = {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
  id: string;
};

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
          href={`/dashboard/customers/users/${info.row.id}`}
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
  }),
];

function UsersTable({ data }: { data: User[] }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
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
