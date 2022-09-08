import * as React from 'react';
import {useState} from 'react';
import {Project} from "./Project";
import {NewProject} from "./NewProject";
import Box from '@mui/material/Box';
import {GridColDef, GridRowId,} from '@mui/x-data-grid-premium';

import "../../index.css"
import "./projectshow.css";
import {DataGrid} from "@mui/x-data-grid";
import {Button, ButtonGroup,} from '@mui/material';
import AddProject from "./AddProject";
import UpdateProjectForm from "./UpdateProjectForm";
import moment from "moment";
import ImportGithubForm from "./ImportGithubForm";

type ProjectProps = {
    projects: Project[],
    updateProjectForm: (project: Project) => Promise<void>,
    addProject: (newProject: NewProject) => Promise<Project>,
    deleteProject: (id: GridRowId[]) => Promise<void>;
    getAllRepositoryInfo: (username: string, repositoryname: string) => Promise<void>
}

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 150,
        headerClassName: 'super-app-theme--header'
    },
    {
        field: 'projectName',
        headerName: 'Projektname',
        width: 200,
        headerClassName: 'super-app-theme--header'

    },
    {
        field: 'Issues',
        headerName: 'Aufgaben',
        width: 200,
        headerClassName: 'super-app-theme--header'
    },

    {
        field: 'created_at',
        headerName: 'Erstellt am',
        type: "date",
        width: 160,
        headerClassName: 'super-app-theme--header',
        valueFormatter: params =>
            moment(params?.value).format("DD.MM.YYYY"),
    },
];

export default function DataGridDemo(props: ProjectProps) {

    const rows = props.projects

    console.log(rows)

    const [ID, setID] = useState<GridRowId[]>([])

    return (
        <Box sx={{
            height: 600, width: '90%', margin: '4em', backgroundColor: 'var(--TableBodyMessageBackground)',
            '& .super-app-theme--header': {
                backgroundColor: '#2b4b8e', color: '#f9f9f9'
            }
        }}>
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
                <Button sx={{backgroundColor: 'var( --ButtonColor)'}}
                        onClick={() => props.deleteProject(ID)}>Delete</Button>
                <AddProject addProject={props.addProject}/>
                <UpdateProjectForm selectedID={ID[0]} projectUpdate={props.updateProjectForm}
                                   projects={props.projects}/>
                <ImportGithubForm getAllRepositoryInfo={props.getAllRepositoryInfo}/>
            </ButtonGroup>
        </Box>
    );
}
