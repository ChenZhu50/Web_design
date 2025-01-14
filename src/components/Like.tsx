import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

interface Props {
    liked: boolean
    onClick: () => void
}

const toggle = (liked: boolean, setLiked: (liked: boolean) => void, onClick: () => void) => {
    setLiked(!liked);
    onClick();
}


const Like = ({ liked: initialLiked, onClick }: Props) => {
    const [liked, setLiked] = useState(initialLiked)
    if (liked) {
        return (
            <div>
                <AiFillHeart
                    color="red"
                    size={100}
                    onClick={() => toggle(liked, setLiked, onClick)} />
            </div>
        )
    } else {
        return (
            <div>
                <AiOutlineHeart
                    size={100}
                    onClick={() => toggle(liked, setLiked, onClick)} />
            </div>
        )
    }
}

export default Like