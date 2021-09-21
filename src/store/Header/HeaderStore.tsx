import { makeObservable } from "mobx";

type ItemType = {
    label: string,
    href: string,
    active?: boolean
};
type UserType = {
    avatar: string,
    name: string,
    info: string
};

class HeaderStore {
    constructor() {
        makeObservable(this, {

        });
    }

    user: UserType = {
        avatar: "https://i.ibb.co/K2R8Lqb/Rectangle-1496.png",
        name: "Роберт Пласт",
        info: "Cейсмик"
    };

    menuItems: Array<ItemType> = [
        {
            label: "Раздел 1",
            href: "razdel_1"
        },
        {
            label: "Раздел 2",
            href: "razdel_2",
            active: true
        },
        {
            label: "Раздел 3",
            href: "razdel_3"
        },
        {
            label: "Раздел 4",
            href: "razdel_4"
        }
    ];
}
export default new HeaderStore();
