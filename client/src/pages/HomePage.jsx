import FileList from '../components/FileListComponent';
import {listDir} from '../utils/api-requests';
import {useState, useEffect} from 'react';
import { useParams, Link } from "react-router-dom";

const HomePage = () => {
    const params = useParams(); 
    const dir = params['*']; 
    const [files, setFiles] = useState([]);

    useEffect(()=>{
        let directory;
        dir == undefined ? directory = '/' : directory = dir;

        listDir(
            directory,
            response => {
                console.log(response.data.data);
                setFiles(response.data.data);
            },
            error => {}
        );


    }, [dir]);

    return(
        <div className='container d-flex flex-column'>
            <Link to="/files">Home</Link>
            <span>Current directory: {dir}</span>
            <FileList files={files} curDir={dir}/>
        </div>
    )
}

export default HomePage;