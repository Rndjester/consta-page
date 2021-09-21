import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Group.scss";
import { GroupeRowsType } from "../../store/MainPage/MainPage";

interface Props {
    items: Array<GroupeRowsType>
}

const Group: FC<Props> = ({ items }) => {
    const parseItems = items.map((item) => (
        <div className="Group-row" key={item.id}>
            <div className="Group-field">
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
                    <div className="Group-info">
                        {item.info}
                    </div>
                )
            }
        </div>
    ));
    return (
        <>
            <div className="Group-item">
                <div className="Group-title">Группа</div>
                <div className="Group-info-block">
                    {parseItems}
                </div>
            </div>
        </>
    );
};
export default Group;
