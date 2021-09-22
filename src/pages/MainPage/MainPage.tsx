import React, { useState } from "react";
import { Text } from "@consta/uikit/Text";
import { Breadcrumbs } from "@consta/uikit/Breadcrumbs";
import { ChoiceGroup } from "@consta/uikit/ChoiceGroup";
import { TextField } from "@consta/uikit/TextField";
import { Button } from "@consta/uikit/Button";
import { Badge } from "@consta/uikit/Badge";
import { Table } from "@consta/uikit/Table";
import { Informer } from "@consta/uikit/Informer";
import { IconWarning } from "@consta/uikit/IconWarning";
import { IconCheck } from "@consta/uikit/IconCheck";
import { Pagination } from "@consta/uikit/Pagination";
import { Select } from "@consta/uikit/Select";
import { IconDownload } from "@consta/uikit/IconDownload";
import MainPageLayout from "../../layouts/MainPageLayout/MainPageLayout";
import "./MainPage.scss";
import store, { ChouseItem, OptionSelectType } from "../../store/MainPage/MainPage";
import Group from "../../components/Group/Groups";

export default function MainPage(): JSX.Element {
    /** ChouseGroup */
    const [choiseGroupValue, setChoiseGroupValue] =
        useState<ChouseItem | null>(store.choiseGroupItems[0]);
    /** textField */
    const [textFieldValue, setTextFieldValue] = useState("500000");
    const handleTextFieldChange = ({ value }) => setTextFieldValue(value);
    /** select */
    const [selectValue, setSelectValue] = useState<OptionSelectType | null>();
    /** pagination */
    const [currentPage, setCurrentPage] = React.useState<number>(0);
    const totalPages = 10;
    const hotKeys = {
        prevPage: {
            label: "",
            values: ["Shift", "ArrowLeft"]
        },
        nextPage: {
            label: "",
            values: ["Shift", "ArrowRight"]
        }
    };
    const handleChange = (pageNumber: any): void => {
        setCurrentPage(pageNumber);
    };
    /**
     * Test text
     * */
    const testText =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
        "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
        "nisi ut aliquip ex ea commodo consequat.";
    return (
        <MainPageLayout>
            <div className="MainPage">
                <Breadcrumbs
                    className="Breadcrumbs"
                    pages={store.pages}
                    size="m"
                    maxCount={3}
                    getLabel={(page) => page.label}
                    getIsActive={(page) => !!page.isActive}
                    getLink={(page) => page.link}
                    onClick={(page, e) => {
                        e.preventDefault();
                    }}
                />
                <Text className="MainPage-Title" size="2xl" weight="bold">Название объекта</Text>
                <div className="MainPage-Subtitle-block">
                    <Text view="secondary">Дата создания: 12.08.2021</Text>
                    <Badge view="stroked" status="system" label="В работе" />
                    <Badge status="normal" label="Важное" />
                </div>
                <ChoiceGroup
                    value={choiseGroupValue}
                    items={store.choiseGroupItems}
                    onChange={({ value }) => setChoiseGroupValue(value)}
                    getLabel={(item) => item}
                    multiple={false}
                    view="ghost"
                    width="full"
                    name="ChoiceGroupExample"
                    className="ChoiceGroup-list"
                />
                <Text className="MainPage-Title small" size="l" weight="bold">Заголовок</Text>
                <div className="Parametrs">
                    <div className="Parametrs-block">
                        <div className="Parametrs-item">
                            <div className="Parametrs-item__label">Параметр 1</div>
                            <Select
                                placeholder="Выберите значение"
                                items={store.selectOptions}
                                value={selectValue}
                                onChange={({ value }) => setSelectValue(value)}
                            />
                        </div>
                        <div className="Parametrs-item">
                            <div className="Parametrs-item__label">Параметр 2</div>
                            <TextField value={textFieldValue} onChange={handleTextFieldChange} rightSide="y.e." width="full" />
                        </div>
                    </div>
                    <Button label="Действие" view="ghost" />
                </div>
                <div>
                    <Text className="MainPage-Title small" size="l" weight="bold">Заголовок</Text>
                    <Table
                        columns={store.мainPageTableColumn}
                        rows={store.мainPageTableRows}
                        zebraStriped="odd"
                        size="m"
                    />
                    <Pagination
                        className="Pagination"
                        type="input"
                        currentPage={currentPage}
                        onChange={handleChange}
                        hotkeys={hotKeys}
                        totalPages={totalPages}
                    />
                    <Button label="Сохранить" view="secondary" iconRight={IconDownload} />
                </div>
                <div>
                    <Text className="MainPage-Title small" size="l" weight="bold">Заголовок</Text>
                    <Informer className="Informer" label={testText} view="filled" status="system" icon={IconCheck} />
                    <Informer className="Informer" label={testText} view="filled" status="system" icon={IconWarning} />
                    <div className="Groupe-Wrap">
                        <Group items={store.groupe1Rows} />
                        <Group items={store.groupe2Rows} />
                        <Group items={store.groupe3Rows} />
                        <Group items={store.groupe4Rows} />
                        { /* <Table */}
                        { /*    columns={store.GroupeColumn} */}
                        { /*    rows={store.Groupe1Rows} */}
                        { /*    zebraStriped="odd" */}
                        { /*    size="m" */}
                        { /* /> */}

                    </div>
                    <Button label="Сохранить" view="secondary" iconRight={IconDownload} />
                </div>
            </div>
        </MainPageLayout>
    );
}
