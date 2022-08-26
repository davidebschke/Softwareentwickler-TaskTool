import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Project} from "./Project";
import {NewProject} from "./NewProject";
import UpdateProjectForm from "./UpdateProjectForm";
import Button from "@mui/material/Button";
import AddProject from "./AddProject";


import "./projectshow.css";
import ShowIssues from "./ShowIssues";
import {Issues} from "./Issues";
import FilteredCloseIssues from './FilteredCloseIssues';
import FilteredOpenIssues from "./FilteredOpenIssues";


type ProjectProps = {
    projects: Project[],
    issues: Issues[],
    updateProjectForm: (project: Project) => Promise<void>,
    addProject: (newProject: NewProject) => Promise<Project>,
    deleteProject: (id: string) => Promise<void>;
}

interface Column {
    id: 'projectNumber' | 'projectName' | 'status' | 'projectMember';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    {id: 'projectNumber', label: 'Projectnumber', minWidth: 170},
    {id: 'projectName', label: 'Projectname', minWidth: 100},
    {
        id: 'status',
        label: 'Status',
        minWidth: 200,
        align: 'right',
    },
    {
        id: 'projectMember',
        label: 'Projectmember',
        minWidth: 170,
        align: 'right',
    },
];

export default function StickyHeadTable(props: ProjectProps) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <Paper sx={{
                width: '100%',
                overflow: 'hidden',
                backgroundColor: '#6B7280',
                marginTop: '2em',
                marginRight: '1em',
                marginLeft: '1em'
            }}>
                <TableContainer sx={{maxHeight: 600,}}>
                    <Table stickyHeader aria-label="sticky table">
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
                            {props.projects
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((project) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={project.id}>
                                            {columns.map((column) => {
                                                const value = project[column.id];
                                                if (column.id === 'status') {
                                                    return (
                                                        <TableCell sx={{color: 'var(--table_content_color);', display:'flex'}}
                                                                   key={column.id}
                                                                   align={column.align}>
                                                            <FilteredOpenIssues issues={props.issues}/>
                                                            <FilteredCloseIssues issues={props.issues}/>
                                                        </TableCell>
                                                    )
                                                }
                                                return (
                                                    <TableCell sx={{color: 'var(--table_content_color);'}}
                                                               key={column.id}
                                                               align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                            <TableCell>
                                                <UpdateProjectForm project={project}
                                                                   projectUpdate={props.updateProjectForm}/>
                                            </TableCell>
                                            <TableCell>
                                                <Button sx={{backgroundColor: '#1F2937'}} variant={"contained"}
                                                        size={"small"}
                                                        onClick={() => props.deleteProject(project.id)
                                                        }> delete
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>

                    </Table>
                    <div className={"add"}>
                        <AddProject addProject={props.addProject}/>
                    </div>
                </TableContainer>
                <TablePagination
                    sx={{color: "var(--table_Head_color);"}}
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={props.projects.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <ShowIssues issues={props.issues}/>
        </>
    );
}
