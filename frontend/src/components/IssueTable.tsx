import {Table, TableCell} from "@mui/material";
import * as React from "react";
import {Issue} from "./Issue";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";

type showIssuesProps = {
    issues: Issue[];
}


export default function IssueTable(props: showIssuesProps) {

    interface Column {
        id: 'number' | 'title' | 'created_at' | 'login';
        label: string;
        minWidth?: number;
        align?: 'right';
        format?: (value: number) => string;
    }

    const columns: readonly Column[] = [
        {id: 'number', label: 'Issuenummer',},
        {id: 'title', label: 'Issuename',},
        {
            id: 'created_at',
            label: 'Erstellt am',
            align: 'right',
        },
        {
            id: 'login',
            label: 'Owner',
            align: 'right',
        },
    ];
    return (
        <div>
            <Table sx={{backgroundColor: '#6B7280'}}>
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell sx={{backgroundColor: "#374151", color: "var(--table_Head_color);"}}
                                       key={column.id}
                                       align={column.align}
                                       style={{minWidth: column.minWidth}
                                       }
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.issues
                        .map((issues) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={issues.number}>
                                    {columns.map((column) => {
                                        const value = issues[column.id];
                                        return (
                                            <TableCell sx={{color: 'var(--table_content_color);'}} key={column.id}
                                                       align={column.align}>
                                                {column.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </div>
    )
}
