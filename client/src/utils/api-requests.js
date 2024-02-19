import axios from 'axios';

export const listDir = (dir, onSuccess, onFail) => {
    axios.get(`http://localhost:3001/api/file/dir/${dir}`)
    .then(response => {
        // handle success
        onSuccess(response);
    })
    .catch(error => {
        // handle error
        onFail(error);
    })
    .finally(() => {
        // always executed
    });
}