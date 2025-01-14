import { useState } from "react";
import './ListGroup.css';
import styled from "styled-components";


const List = styled.ul`
list-style-type: none;
padding: 0;
`

interface ListItemProps {
    active: boolean;
}

const ListItem = styled.li<ListItemProps>`
padding: 5px 0; 
background-color: ${(props) => (props.active ? "#f0f0f0" : "white")};
`


interface Props {
    heading: string;
    items: string[];
    //(item: string) => void 代表这个函数接受一个string类型的参数，返回值是void
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {

    //HOOK:告诉react组件需要在渲染时记住一些状态
    const [selectedIndexes, setSelectdIndex] = useState(0);



    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No items to display</p>}
            <List className="list-group">
                {items.map((item, index) => (
                    <ListItem
                        active={selectedIndexes === index}
                        key={item}
                        onClick={() => {
                            setSelectdIndex(index)
                            onSelectItem(item)
                        }}
                    >
                        {item}
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default ListGroup;
