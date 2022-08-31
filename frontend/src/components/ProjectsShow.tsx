import * as React from 'react';
import {Project} from "./Project";
import {NewProject} from "./NewProject";
import Box from '@mui/material/Box';
import {GridColDef, GridRowId,} from '@mui/x-data-grid-premium';

import "./projectshow.css";
import {Issue} from "./Issue";
import {DataGrid} from "@mui/x-data-grid";
import {Button, ButtonGroup,} from '@mui/material';
import { useState} from "react";
import AddProject from "./AddProject";

type ProjectProps = {
    projects: Project[],
    issues: Issue[],
    updateProjectForm: (project: Project) => Promise<void>,
    addProject: (newProject: NewProject) => Promise<Project>,
    deleteProject: (id: GridRowId[]) => Promise<void>;
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

    const rows=props.projects

    const [ID,setID]=useState <GridRowId[]>([])
    return (
        <Box sx={{height: 400, width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{newEditingApi: false}}
                onSelectionModelChange={
                    setID
            }
            />
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button sx={{backgroundColor: '#1F2937'}} onClick={()=> props.deleteProject(ID)} >Delete</Button>
                 <AddProject addProject={props.addProject}/>
                <Button>Three</Button>
            </ButtonGroup>
        </Box>

    );
}
