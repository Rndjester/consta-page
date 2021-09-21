import { TableColumn } from "@consta/uikit/Table";

export type ChouseItem = string;

type TableRowType = {
    id: string | number,
    field?: string,
    year?: number,
    type?: string,
    estimatedReserves?: number,
    remainingReserves?: number,
    production?: number,
    total?: number
};
type GroupeLink = {
    pathname: string,
    text: string
};
export type GroupeRowsType = {
    id: string,
    field: string,
    info: string,
    link?: GroupeLink
    icon?: string
};
export type OptionSelectType = {
    label: string;
    id: number;
    disabled?: boolean;
};
class MainPage {
    ChouseGroupItems: ChouseItem[] = ["Пункт 1", "Пункт 2", "Пункт 3", "Пункт 4", "Пункт 5", "Пункт 6"];

    MainPageTableColumn: any = [
        {
            title: "Месторождение",
            accessor: "field",
            align: "left",
            sortable: true,
            width: 144
        },
        {
            title: "Год открытия",
            accessor: "year",
            align: "center",
            sortable: true,
            width: 155
        },
        {
            title: "Полные запасы, млн. т.",
            accessor: "estimatedReserves",
            align: "right",
            sortable: true,
            width: 155
        },
        {
            title: "Остаточные извлекаемые запасы, млн. т.",
            accessor: "remainingReserves",
            align: "right",
            sortable: true,
            width: 155
        },
        {
            title: "Добыча тыс. т/сут.",
            accessor: "production",
            align: "right",
            sortable: true,
            width: 155
        },
        {
            title: "Всего добыто, млн. т.",
            accessor: "total",
            align: "right",
            sortable: true,
            width: 154
        }
    ];

    MainPageTableRows: any = [
        {
            id: "row1",
            field: "Северное",
            year: 1982,
            estimatedReserves: 5000,
            remainingReserves: 1700,
            production: 33,
            total: 313
        },
        {
            id: "row2",
            field: "Южное",
            year: 2001,
            estimatedReserves: 7540,
            remainingReserves: 7540,
            production: 363,
            total: 88
        },
        {
            id: "row3",
            field: "Западное",
            year: 1985,
            estimatedReserves: 8766,
            remainingReserves: 3374,
            production: 256,
            total: 434
        },
        {
            id: "row4",
            field: "Восточное",
            year: 1989,
            estimatedReserves: 1697,
            remainingReserves: 4818,
            production: 250,
            total: 236
        },
        {
            id: "row5",
            field: "Центральное",
            year: 1997,
            estimatedReserves: 5169,
            remainingReserves: 3712,
            production: 292,
            total: 417
        }
    ];

    SelectOptions: OptionSelectType[] = [
        {
            label: "Первый",
            id: 1
        },
        {
            label: "Второй",
            id: 2
        },
        {
            label: "Третий",
            id: 3
        }
    ];

    pages = [
        {
            label: "Раздел",
            link: "https://url.com"
        },
        {
            label: "XXX",
            link: "https://url.com/page-1",
            isActive: true
        }
    ];

    selectItems: any = [
        { label: "Параметр 1", id: 1 },
        { label: "Параметр 2", id: 2 },
        { label: "Параметр 3", id: 3 },
        { label: "Параметр 4", id: 4 },
        { label: "Параметр 5", id: 5 },
        { label: "Параметр 6", id: 6 }
    ];

    GroupeColumn: any = [
        {
            title: "Группа",
            align: "left",
            accessor: "field"
        },
        {
            title: "",
            accessor: "info",
            align: "right"
        }
    ];

    Groupe1Rows: GroupeRowsType[] = [
        {
            id: "1",
            field: "XXXX",
            info: "XXX",
            link: {
                pathname: "/radel1",
                text: "XXXX"
            }
        },
        {
            id: "2",
            field: "Доставка",
            info: "100 y.e",
            link: {
                pathname: "/radel3",
                text: "XXXX"
            }
        },
        {
            id: "3",
            field: "Доставка",
            info: "1003 y.e",
            link: {
                pathname: "/radel3",
                text: "XXXX"
            }
        },
        {
            id: "4",
            field: "Это ты",
            info: "100 y.e"
        },
        {
            id: "5",
            field: "И мы",
            info: "1004 y.e",
            link: {
                pathname: "/radel3",
                text: "XXXX"
            }
        },
        {
            id: "6",
            field: "И я",
            info: "1000 y.e",
            link: {
                pathname: "/radel3",
                text: "XXXX"
            }
        }
    ];

    Groupe2Rows: GroupeRowsType[] = [
        {
            id: "1",
            field: "XXXX",
            info: "XXX"
        },
        {
            id: "2",
            field: "XXXX",
            info: "XXX"
        },
        {
            id: "3",
            field: "XXXX",
            info: "XXX"
        },
        {
            id: "4",
            field: "XXXX",
            info: "XXX"
        },
        {
            id: "5",
            field: "XXXX",
            info: "XXX"
        }
    ];

    Groupe3Rows: GroupeRowsType[] = [
        {
            id: "1",
            field: "XXXX",
            info: "XXX"
        },
        {
            id: "2",
            field: "XXXX",
            info: "XXX"
        },
        {
            id: "3",
            field: "XXXX",
            info: "XXX"
        },
        {
            id: "4",
            field: "XXXX",
            info: "XXX"
        },
        {
            id: "5",
            field: "XXXX",
            info: "XXX"
        }
    ];

    Groupe4Rows: GroupeRowsType[] = [
        {
            id: "1",
            field: "XXXX",
            info: "XXX"
        },
        {
            id: "2",
            field: "XXXX",
            info: "XXX"
        },
        {
            id: "3",
            field: "XXXX",
            info: "XXX"
        },
        {
            id: "4",
            field: "XXXX",
            info: "XXX"
        },
        {
            id: "5",
            field: "XXXX",
            info: "XXX"
        }
    ];
}

export default new MainPage();
