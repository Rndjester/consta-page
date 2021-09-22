import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Group.scss";
import { GroupeRowsType } from "../../store/MainPage/MainPage";

interface Props {
    items: GroupeRowsType[]
}

const Group: FC<Props> = ({ items }) => {
    const parseItems = items.map((item) => (
        <div className="Group-Row" key={item.id}>
            <div className="Group-Field">
                {item.field}
                {item.icon ? <img src={item.icon} /> : null}
            </div>
            {
                item.link ? (
                    <NavLink to={item.link.pathname}>
                        {item.link.text}
                        <img src="" alt="" />
                    </NavLink>

                ) : (
                    <div className="Group-Info">
                        {item.info}
                    </div>
                )
            }
        </div>
    ));
    return (
        <div className="Group-Item">
            <div className="Group-Title">Группа</div>
            <div className="Group-InfoBlock">
                {parseItems}
            </div>
        </div>
    );
};
export default Group;
