"use client";

import { Button, Dialog, Flex, TextField, Text, ScrollArea } from "@radix-ui/themes";
import { useState } from "react";
import Modal from "./Modal";
import { CommandList } from "./List";

const CommandMenu = () => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <main>
            <div onClick={() => setShowModal(true)}>search</div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <Flex p="2" direction="column"><TextField.Input size="3" placeholder="Search…"/></Flex>
                <ScrollArea type="auto" scrollbars="vertical" className="h-[50vh]">
                <CommandList />
                </ScrollArea>
            </Modal>
        </main>
    )
}
export default CommandMenu;