
import { useState } from "react";
import "../styles/CommentsList.css";

function CommentsList() {

    // Создаем состояние для хранения списка комментариев
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    // Создаем состояние для хранения значения текстового поля
    const [inputText, setInputText] = useState('');

    // Функция-обработчик добавления нового комментария в список
    const clickAddComment = () => {

        if (inputText !== '') {

            const newId = comments.length > 0 ? comments[comments.length - 1].id + 1 : 1; // Получаем последний id и добавляем 1
            const newComment = { id: newId, text: inputText };
            setComments([...comments, newComment]); // Обновляем состояние списка комментариев
            setInputText(''); // Очищаем значение текстового поля
        }
    }

    // Функция для удаления комментария по его id
    const delComment = (id) => {

        const updatedComments = comments.filter(comment => comment.id !== id); // Фильтруем комментарии, оставляя только те, у которых id не равен переданному id
        setComments(updatedComments); // Обновляем состояние списка комментариев
    }

    return (
        <div>
            <input type="text" value={inputText} placeholder="Добавте комментарий" onChange={(e) => setInputText(e.target.value)}></input>
            <button onClick={clickAddComment}>Добавить</button>
            <ul className="comment-list">
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <div className="comment-container">
                            {comment.text}
                        </div>
                        <div className="delete-button-container">
                            <button onClick={() => delComment(comment.id)}>Удалить</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CommentsList;