import React from "react";
import "./MainPageLayout.scss";
import { Header, HeaderMenu, HeaderModule } from "@consta/uikit/Header";
import { User } from "@consta/uikit/User";
import headerStore from "../../store/Header/HeaderStore";

type Props = {
    children: React.ReactNode
};

export default function MainPageLayout({ children }: Props): JSX.Element {
    return (
        <div className="MainPageLayout">
            <div className="MainPageLayout-HeaderContainer">
                <Header
                    leftSide={(
                        <>
                            <HeaderModule indent="l">
                                <HeaderMenu items={headerStore.menuItems} />
                            </HeaderModule>
                        </>
                    )}
                    rightSide={(
                        <>
                            <User
                                avatarUrl={headerStore.user.avatar}
                                name={headerStore.user.name}
                                info={headerStore.user.info}
                            />
                        </>
                    )}
                />
            </div>
            <div className="MainPageLayout-ContentContainer">
                {children}
            </div>
        </div>
    );
}
