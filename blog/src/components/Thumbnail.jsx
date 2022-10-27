import { Link, useLocation } from 'wouter';
import { deletePost } from '../tools/storage';
import './Thumbnail.css';

export default function Thumbnail(props) {
    const { author, title, content, cover, date, id } = props;
    const { refresher } = props;

    const handleClick = (evt) => {
        evt.preventDefault();
        deletePost(id);
        refresher();
    };

    const [_location, setLocation] = useLocation();

    return (
        <>
            <div className="thumbnail-container" data-aos="fade-up">
                <Link href={`/blog/${id}`} className="thumbnail-content">
                    <div className="thumbnail-cover">
                        <img
                            className="thumbnail-image"
                            src={cover}
                            alt="some image"
                            loading="lazy"
                        />
                    </div>
                    <div className="thumbnail-info">
                        <h1 className="thumbnail-info-heading">
                            <span className="thumbnail-info-title">
                                {title}
                            </span>
                            <span className="thumbnail-info-author">
                                by {author}
                            </span>
                        </h1>
                        <p className="thumbnail-info-text">{content}</p>
                        <p className="thumbnail-info-date">posted on {date}</p>
                    </div>
                </Link>
                <div className="thumbnail-further-actions">
                    <button className="thumbnail-further-actions-button">
                        <span
                            className="thumbnail-further-actions-dot"
                            style={{ animationDelay: '0s' }}
                        ></span>
                        <span
                            className="thumbnail-further-actions-dot"
                            style={{ animationDelay: '0.3s' }}
                        ></span>
                        <span
                            className="thumbnail-further-actions-dot"
                            style={{ animationDelay: '0.6s' }}
                        ></span>
                    </button>
                    <div className="thumbnail-further-actions-drop">
                        <button
                            className="thumbnail-further-actions-drop-option"
                            onClick={() => setLocation(`/edit/${id}`)}
                        >
                            <i className="material-icons">mode_edit</i>
                            Edit
                        </button>
                        <button
                            className="thumbnail-further-actions-drop-option"
                            style={{ color: 'red' }}
                            onClick={(evt) => handleClick(evt)}
                        >
                            <i className="material-icons">delete</i>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
