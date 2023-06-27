import {format} from "date-fns";
import {Link} from "react-router-dom";



export default function Post({_id,title,summary,cover,content,createdAt,updatedAt,author}) {
    return (
    <div className="post">
    <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={'http://localhost:8000/'+cover} alt=""/>
        </Link>
    </div>
    <div className="text"> 
    <Link to={`/post/${_id}`}>
    <h2>{title}</h2>
    </Link>
    <p className="info">
      <a className="author">{author.username}</a> 
      </p>
      <p className="info">
      <time>Created {format(new Date(createdAt), 'eee, d MMMM y, hh:mm aaaa')}</time>
      </p>
      <p className="info">
      <time>Updated {format(new Date(updatedAt), 'eee, d MMMM y, hh:mm aaaa')}</time>
      </p>

    <p className="summary">{summary}</p>
    </div>
    </div>
    );
}

/*
      <time>{intlFormat(new Date(createdAt), {
             year: 'numeric',
             month: 'long',
             day: 'numeric',
             hour: 'numeric',
             minute: 'numeric',
             second: 'numeric',
      })}</time>
      */