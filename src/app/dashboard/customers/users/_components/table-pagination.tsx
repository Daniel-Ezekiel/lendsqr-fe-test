import styles from "@/app/_sass/pagination.module.scss";
import { Table } from "@tanstack/react-table";
import Button from "@/app/_components/Button";

// import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
// import { ClipLoader } from "react-spinners";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  title?: string;
  count?: number;
  hasNext?: boolean;
  isFetchingNext?: boolean;
  handleGetNextPage?: () => void;
}

export function DataTablePagination<TData>({
  table,
  title,
  count,
  hasNext,
  isFetchingNext,
  handleGetNextPage,
}: DataTablePaginationProps<TData>) {
  return (
    <div>
      <div className={styles.paginationContainer}>
        <div>
          Showing {table.getRowModel().rows.length} from{" "}
          {count || table.options.data.length}{" "}
          <span className='capitalize'>{title}</span>.
        </div>

        <div>
          <div className={styles.buttonsContainer}>
            <Button
              className={`${styles.firstPageButton} ${styles.backNextButtons}`}
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              title='Go to first page'
            >
              <ChevronsLeftIcon className={styles.icon} />
            </Button>
            <Button
              className={`${styles.firstPageButton} ${styles.backNextButtons}`}
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              title='Go to previous page'
            >
              <ChevronLeftIcon className={styles.icon} />
            </Button>
            <div>
              <div className={styles.paginationButtonsContainer}>
                {Array(table.getPageCount())
                  .fill(0)
                  .map((_, index) => (
                    <Button
                      key={index}
                      className={
                        `${
                          index == table.getState().pagination.pageIndex &&
                          styles.paginationButtonActive
                        } ${styles.paginationButton}` || ""
                      }
                      onClick={() => table.setPageIndex(index)}
                    >
                      {index + 1}
                    </Button>
                  ))}
              </div>
            </div>
            <Button
              className={`${styles.lastPageButton} ${styles.backNextButtons}`}
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              title='Go to next page'
            >
              <ChevronRightIcon />
            </Button>
            <Button
              className={`${styles.lastPageButton} ${styles.backNextButtons}`}
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              title='Go to last page'
            >
              <ChevronsRightIcon />
            </Button>
          </div>

          {hasNext && (
            <Button onClick={handleGetNextPage} disabled={isFetchingNext}>
              {isFetchingNext ? <span>Loading...</span> : "Load More"}
            </Button>
          )}
        </div>
        {/* <div className='flex items-center space-x-2'>
          <p className='text-sm font-medium'>Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className='h-8 w-[70px]'>
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side='top'>
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div> */}
        {/* <div className='flex w-[100px] items-center justify-center text-sm font-medium'>
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div> */}
      </div>
    </div>
  );
}
