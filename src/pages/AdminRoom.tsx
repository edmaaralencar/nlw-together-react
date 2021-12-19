import { useNavigate, useParams } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';

import Button from '../components/Button';
import Question from '../components/Question';
import RoomCode from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';

import '../styles/room.scss';

type RoomParams = {
    id: string;
};

const AdminRoom = () => {
    const { user } = useAuth();
    const navigate = useNavigate()
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const { questions, title } = useRoom(String(roomId));

    const handleDeleteQuestion = async (questionId: string) => {
        if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    const handleDeleteRoom = async () => {
        database.ref(`rooms/${roomId}`).update({ 
            endedAt: new Date()
        })

        navigate('/')
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Logo" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button onClick={handleDeleteRoom} isOutlined>Encerrar Sala</Button>
                    </div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h4>Sala {title}</h4>
                    {questions.length > 0 && (
                        <span>{questions.length} perguntas</span>
                    )}
                </div>

                <div className="question-list">
                    {questions.map((question) => (
                        <Question
                            key={question.id}
                            content={question.content}
                            author={question.author}
                        >
                            <button type='button' onClick={() => handleDeleteQuestion(question.id)}>
                                <img src={deleteImg} alt="Remover pergunta" />
                            </button>
                        </Question>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default AdminRoom;
