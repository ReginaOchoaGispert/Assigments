import './Edit.css';

import { findPostById, updatePost } from '../tools/storage';
import { useState } from 'react';
import { useLocation } from 'wouter';

export default function Edit(props) {
    const [_location, setLocation] = useLocation();
    const title_limit = 50;
    const content_limit = 1000;
    let { id } = props;
    id = parseInt(id);
    if (!findPostById(id)) {
        return (
            <>
                <h1 className="">Oh No</h1>
            </>
        );
    }
    const { title, content, author, cover } = findPostById(id)[0];

    const [inputTitle, setInputTitle] = useState([
        title,
        `${title.length * 14}px`,
        14,
    ]);

    const [inputAuthor, setInputAuthor] = useState([
        author,
        `${author.length * 14}px`,
        14,
    ]);
    const [inputContent, setInputContent] = useState(content);
    const [inputCover, setInputCover] = useState(cover);
    const [inputTempCover, setInputTempCover] = useState(cover);
    const [showModal, setShowModal] = useState('');

    const handleChanges = (evt, state, setState) => {
        evt.preventDefault();
        let txt = evt.target.value;
        let width = `${txt.length * state[2]}px`;
        if (txt.length < title_limit) setState([txt, width, state[2]]);
    };

    const handleTextArea = (evt) => {
        evt.preventDefault();
        let txt = evt.target.value;

        if (txt.length < content_limit) {
            console.log(txt);
            setInputContent(txt);
        }
    };

    const handleTempURL = (evt) => {
        evt.preventDefault();
        let txt = evt.target.value;
        setInputTempCover(txt);
    };

    const handleImageChange = (evt) => {
        evt.preventDefault();
        setInputCover(inputTempCover);
        setShowModal('');
    };

    const saveChanges = (evt) => {
        evt.preventDefault();
        updatePost(id, 'title', inputTitle[0]);
        updatePost(id, 'content', inputContent);
        updatePost(id, 'author', inputAuthor[0]);
        updatePost(id, 'cover', inputCover);

        setLocation('/');
    };

    return (
        <>
            <div className="edit">
                <div className="edit-content">
                    <button
                        className="edit-content-image"
                        onClick={() => setShowModal('modal-show')}
                    >
                        <img src={inputCover} alt="" />
                        <div className="edit-content-image-hover-screen">
                            <p>Change Image</p>
                        </div>
                    </button>
                    <div className="edit-content-field edit-content-title">
                        <input
                            type="text"
                            value={inputTitle[0]}
                            style={{ width: inputTitle[1] }}
                            onChange={(evt) =>
                                handleChanges(evt, inputTitle, setInputTitle)
                            }
                        />
                        <i className="material-icons">edit</i>
                    </div>
                    <div className="edit-content-field edit-content-author">
                        <span>by @</span>
                        <input
                            type="text"
                            value={inputAuthor[0]}
                            style={{ width: inputAuthor[1] }}
                            onChange={(evt) =>
                                handleChanges(evt, inputAuthor, setInputAuthor)
                            }
                        />
                        <i className="material-icons">edit</i>
                    </div>
                    <div className="edit-content-body">
                        <textarea
                            value={inputContent}
                            onChange={handleTextArea}
                        />
                        <span>
                            {inputContent.length}/{content_limit}
                        </span>
                    </div>
                </div>
                <button className="edit-save-button" onClick={saveChanges}>
                    <i className="material-icons">save</i>Save
                </button>
                <div className={`change-image-modal ${showModal}`}>
                    <div className="change-image-modal-container">
                        <div className="change-image-modal-content">
                            <h2>Change a Image</h2>
                            <div className="change-image-modal-input">
                                <input
                                    type="text"
                                    value={inputTempCover}
                                    onChange={handleTempURL}
                                />
                                <button onClick={handleImageChange}>
                                    Change
                                </button>
                            </div>
                            <img loading="lazy" src={inputTempCover} alt="" />
                        </div>
                    </div>
                    <div
                        className="change-image-modal-close"
                        onClick={() => {
                            setInputTempCover(cover);
                            setShowModal('');
                        }}
                    ></div>
                </div>
            </div>
        </>
    );
}
