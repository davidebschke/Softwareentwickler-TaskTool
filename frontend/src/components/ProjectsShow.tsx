import * as React from 'react';
import {Project} from "./Project";
import {NewProject} from "./NewProject";
import Box from '@mui/material/Box';
import {GridColDef,} from '@mui/x-data-grid-premium';

import "./projectshow.css";
import {Issue} from "./Issue";
import {DataGrid} from "@mui/x-data-grid";
import AddProject from "./AddProject";

type ProjectProps = {
    projects: Project[],
    issues: Issue[],
    updateProjectForm: (project: Project) => Promise<void>,
    addProject: (newProject: NewProject) => Promise<Project>,
    deleteProject: (id: string) => Promise<void>;
}

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
            <AddProject addProject={props.addProject}/>
        </Box>
    );
}
