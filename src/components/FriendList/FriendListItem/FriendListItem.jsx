import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";
import defaultImage from './defaultImage.png';

const FriendListItem = ({
    isOnline,
    avatar = defaultImage,
    name,
}) => {
    return (
        <li className={css.item}>
            <span className={isOnline ? css.status__true : css.status__false}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    isOnline: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default FriendListItem;