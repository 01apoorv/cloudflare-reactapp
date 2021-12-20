import Posts from './posts'

const Like = ({ id }) => {
  fetch("https://hiringproj.01apoorv719.workers.dev/like",
    {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({id, "val":1})
    })
    return(<Posts />);
}; 

export default Like;
