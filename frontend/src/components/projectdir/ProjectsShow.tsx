import * as React from 'react';
import {useState} from 'react';
import {Project} from "./Project";
import {NewProject} from "./NewProject";
import Box from '@mui/material/Box';
import {GridColDef, GridRenderCellParams, GridRowId,} from '@mui/x-data-grid-premium';

import "../../index.css"
import "./projectshow.css";
import {DataGrid} from "@mui/x-data-grid";
import {Button, ButtonGroup} from '@mui/material';
import AddProject from "./AddProject";
import UpdateProjectForm from "./UpdateProjectForm";
import moment from "moment";
import ImportGithubForm from "./ImportGithubForm";
import {Issue} from "./Issue";
import ShowAllIssues from "./ShowAllIssues";


type ProjectProps = {
    projects: Project[],
    issue: Issue[],
    updateProjectForm: (project: Project) => Promise<void>,
    addProject: (newProject: NewProject) => Promise<Project>,
    deleteProject: (id: GridRowId[]) => Promise<void>;
    getAllRepositoryInfo: (username: string, repositoryname: string) => Promise<void>;
    addIssue: (Issue: { number: string; title: string; state: string, created_at: string }
    ) => Promise<Issue>
}

export default function DataGridDemo(props: ProjectProps) {

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
            field: 'issues',
            headerName: 'Aufgaben',
            width: 200,
            headerClassName: 'super-app-theme--header',
            renderCell: (cellvalue: GridRenderCellParams<Issue[]>) => {
                return (
                    <ShowAllIssues
                        Issue={cellvalue.value &&
                        cellvalue.value?.length > 0 ?
                            cellvalue.value : props.issue}
                        addIssue={props.addIssue}/>
                );
            }
        },
        {
            field: 'created_on',
            headerName: 'Erstellt am',
            type: "date",
            width: 160,
            headerClassName: 'super-app-theme--header',
            valueFormatter: params =>
                moment(params?.value).format("DD.MM.YYYY"),
        },
    ];

    const rows = props.projects

    const [ID, setID] = useState<GridRowId[]>([])

    return (
        <Box sx={{
            height: 600, width: '90%', margin: '4em', backgroundColor: 'var(--TableBodyMessageBackground)',
            '& .super-app-theme--header': {
                backgroundColor: '#A9A9A9', color: 'black'
            }
        }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                onSelectionModelChange={setID}
            />
            <ButtonGroup variant="outlined" aria-label="outlined primary button group" sx={{marginTop: '2em'}}>
                <Button sx={{
                    backgroundColor: 'var( --ButtonColor)',
                    color: 'black',
                    borderColor: '#FFD700',
                    borderWidth: 'medium'
                }}
                        onClick={() => props.deleteProject(ID)}>Delete</Button>
                <AddProject addProject={props.addProject}/>
                <UpdateProjectForm selectedID={ID[0]} projectUpdate={props.updateProjectForm}
                                   projects={props.projects}/>
                <ImportGithubForm getAllRepositoryInfo={props.getAllRepositoryInfo}/>
            </ButtonGroup>
        </Box>
    );
}
