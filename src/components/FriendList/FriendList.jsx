import FriendListItem from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>{friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    avatar={avatar}
                    name={name}
                    key={id}
                    isOnline={isOnline}
                />
            ))}
        </ul>
    );
};

export default FriendList;