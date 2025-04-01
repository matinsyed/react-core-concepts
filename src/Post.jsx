export default function Post({post}) {
    console.log(post);
    const {id, title, body} = post;
    return (
        <div key={id} className="card">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}