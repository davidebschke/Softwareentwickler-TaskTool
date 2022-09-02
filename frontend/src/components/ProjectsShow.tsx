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
import UpdateProjectForm from "./UpdateProjectForm";

type ProjectProps = {
    projects: Project[],
    issues: Issue[],
    updateProjectForm: (project: Project) => Promise<void>,
    addProject: (newProject: NewProject) => Promise<Project>,
    deleteProject: (id: GridRowId[]) => Promise<void>;
}

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 150},
    {
        field: 'projectName',
        headerName: 'Projektname',
        width: 200,

    },
    {
        field: 'creator',
        headerName: 'Creator',
        width: 200,
    },
    {
        field: 'openIssue',
        headerName: 'Offene Aufgaben',
        width: 200,
    },
    {
        field: 'closeIssue',
        headerName: 'Geschlossene Aufgaben',
        width: 200,
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
        <Box sx={{height: 400, width: '90%',margin:'4em'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                onSelectionModelChange={setID}
            />
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button sx={{backgroundColor: '#455d7a'}} onClick={()=> props.deleteProject(ID)} >Delete</Button>
                <AddProject addProject={props.addProject}/>
                <UpdateProjectForm selectedID={ID[0]} projectUpdate={props.updateProjectForm} projects={props.projects}/>
            </ButtonGroup>

            <ButtonGroup sx={{marginLeft:'20em',borderStyle:'solid',borderColor:'ghostwhite',borderWidth:'thin'}} variant="contained" aria-label="outlined primary button group">
           <Button sx={{backgroundColor: '#455d7a'}} variant="contained" startIcon={<img src={"../github.svg"} alt={"GithubIcon"}/>}> Import Github </Button>
            </ButtonGroup>
        </Box>
    );
}
