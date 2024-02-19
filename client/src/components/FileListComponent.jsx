import File from './FileComponent';

const FileList = ({files, curDir}) => {
    let parent;
    if (curDir.charAt(curDir.lenght-1) === '/') {
        parent = curDir.substr(0, curDir.length-1)
    } else {
        parent = curDir;
    }

    console.log(parent);

    return(
        <div>
            <File file={{name: '..', parentDir: parent}}/>
            {files.map((file, index) => {
                return(
                    <File key={index} file={file}/>
                )    
            })}
        </div>
    )
}

export default FileList;