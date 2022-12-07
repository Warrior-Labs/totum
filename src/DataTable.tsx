import * as React from 'react';
import combineCSS from './helpers/combineCSS';
import styles from './scss/DataTable.module.css';
import StyleProps from './types/StyleProps';

type DataTableProps = {} & StyleProps & React.PropsWithChildren;

const DataTableContainer: React.FC<DataTableProps> = (
  props: DataTableProps
) => {
  // Render
  return (
    <table
      id={props.id}
      className={combineCSS([styles.DataTable, props.className])}
      style={props.style}
    >
      {props.children}
    </table>
  );
};

type TableRowProps = {} & StyleProps & React.PropsWithChildren;

const TableRow: React.FC<TableRowProps> = (props: TableRowProps) => {
  // Render
  return (
    <tr
      id={props.id}
      className={combineCSS([styles.TableRow, props.className])}
      style={props.style}
    >
      {props.children}
    </tr>
  );
};

type TableCellProps = {
  rowSpan?: number;
  colSpan?: number;
} & StyleProps &
  React.PropsWithChildren;

const TableCell: React.FC<TableCellProps> = (props: TableCellProps) => {
  // Render
  return (
    <td
      id={props.id}
      className={combineCSS([styles.TableCell, props.className])}
      style={props.style}
      rowSpan={props.rowSpan}
      colSpan={props.colSpan}
    >
      {props.children}
    </td>
  );
};

type TableHeadCellProps = {
  rowSpan?: number;
  colSpan?: number;
} & StyleProps &
  React.PropsWithChildren;

const TableHeadCell: React.FC<TableHeadCellProps> = (
  props: TableHeadCellProps
) => {
  // Render
  return (
    <th
      id={props.id}
      className={combineCSS([styles.TableHeadCell, props.className])}
      style={props.style}
      rowSpan={props.rowSpan}
      colSpan={props.colSpan}
    >
      {props.children}
    </th>
  );
};

type TableHeadProps = {} & StyleProps & React.PropsWithChildren;

const TableHead: React.FC<TableHeadProps> = (props: TableHeadProps) => {
  // Render
  return (
    <thead
      id={props.id}
      className={combineCSS([styles.TableHead, props.className])}
      style={props.style}
    >
      {props.children}
    </thead>
  );
};

type TableBodyProps = {} & StyleProps & React.PropsWithChildren;

const TableBody: React.FC<TableBodyProps> = (props: TableBodyProps) => {
  // Render
  return (
    <tbody
      id={props.id}
      className={combineCSS([styles.TableBody, props.className])}
      style={props.style}
    >
      {props.children}
    </tbody>
  );
};

type TableFootProps = {} & StyleProps & React.PropsWithChildren;

const TableFoot: React.FC<TableFootProps> = (props: TableFootProps) => {
  // Render
  return (
    <tfoot
      id={props.id}
      className={combineCSS([styles.TableFoot, props.className])}
      style={props.style}
    >
      {props.children}
    </tfoot>
  );
};

export const DataTable = Object.assign(DataTableContainer, {
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell,
  Header: TableHead,
  Body: TableBody,
  Footer: TableFoot,
});
