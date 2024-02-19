import {Link} from 'react-router-dom';

const File = ({file}) => {
    let pDir, link;
    if (file.name !== '..') {
        file.parentDir === '/' ? pDir = '' : pDir = file.parentDir+'/';
        link = pDir + file.name;
    } else {
        file.parentDir === '/' ? link = '' : link = file.parentDir;
    }    
    return(
        <Link
            to={'/files/'+link} 
            className='d-flex align-items-center border px-2' 
            style={{cursor: 'pointer'}}
        >
            <i className="bi bi-folder fs-4 me-2"></i>
            <span>{file.name}</span>
        </Link>
    )
}

export default File;