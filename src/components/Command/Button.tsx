"use client"
import { Flex } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import CommandMenu from "./Menu";

const CommandMenuButton = () => {
    const [showModal, setShowModal] = useState(false);
    return (
    <main>
        <motion.div whileHover={{ y: -3, transition: { duration: 0.2 } }}>
            <Flex
                direction="column"
                align="center"
                className="border border-gray-400/30 p-3 rounded-full"
                onClick={() => setShowModal(true)}
            >
                <GoSearch size={24} />
            </Flex>
        </motion.div>
        <CommandMenu showModal={showModal} setShowModal={setShowModal} />
    </main>
    )
}

export default CommandMenuButton;