import * as React from 'react';
import {Project} from "./Project";
import {NewProject} from "./NewProject";
import Box from '@mui/material/Box';
import {GridColDef,} from '@mui/x-data-grid-premium';

import "./projectshow.css";
import {Issue} from "./Issue";
import {DataGrid} from "@mui/x-data-grid";

type ProjectProps = {
    projects: Project[],
    issues: Issue[],
    updateProjectForm: (project: Project) => Promise<void>,
    addProject: (newProject: NewProject) => Promise<Project>,
    deleteProject: (id: string) => Promise<void>;
}


//_______________________

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 90},
    {
        field: 'projectName',
        headerName: 'Projektname',
        width: 200,
        editable: true,
    },
    {
        field: 'creator',
        headerName: 'Creator',
        width: 200,
        editable: true,
    },
    {
        field: 'openIssue',
        headerName: 'Offene Aufgaben',
        width: 200,
        editable: true,
    },
    {
        field: 'closeIssue',
        headerName: 'Geschlossene Aufgaben',
        width: 200,
        editable: true,
    },
    {
        field: 'created_at',
        headerName: 'Erstellt am',
        width: 160,
    },
];


export default function DataGridDemo(props: ProjectProps) {

    return (
        <Box sx={{height: 800, width: '100%'}}>
            <DataGrid
                rows={props.projects}
                columns={columns}
                pageSize={15}
                rowsPerPageOptions={[15]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{newEditingApi: true}}
            />
        </Box>
    );
}


/*export default function StickyHeadTable(props: ProjectProps) {
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
    </>*/

