import './Blog.css';
import { findPostById } from '../tools/storage';

export default function Blog(props) {
    let { id } = props;
    id = parseInt(id);
    if (!findPostById(id)) {
        return (
            <>
                <h1 className="">Oh No</h1>
            </>
        );
    }
    const { title, content, author, date, cover } = findPostById(id)[0];
    return (
        <>
            <div className="blog">
                <div
                    className="blog-banner"
                    style={{ backgroundImage: `url(${cover})` }}
                ></div>
                <div className="blog-info">
                    <h1 className="blog-title">{title}</h1>
                    <h3 className="blog-author">by {author}</h3>
                    <p className="blog-date">Posted on {date}</p>
                </div>
                <div className="blog-content">
                    <p className="blog-body">{content}</p>
                </div>
            </div>
        </>
    );
}
