import copyImg from '../assets/images/copy.svg';

import '../styles/roomcode.scss';

type RoomCodeProps = {
    code: string | undefined;
};

const RoomCode = (props: RoomCodeProps) => {
    const copyRoomCodeToClipboard = () => {
        navigator.clipboard.writeText(String(props.code));
    };

    return (
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
    );
};

export default RoomCode;
