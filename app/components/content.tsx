"use client";

import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Popover } from "@headlessui/react";
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { styles } from "../lib/styles";

export default function Content(props) {
    useEffect(() => {}, [props]);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <div className="container p-0 m-0">
            <div className="inline-block">
                <div style={styles.indexedBadge}>{props.index}</div>
            </div>
            <div className="container">
                <h2 className="text-xl pt-2 font-bold">
                    Front-end sennior developer
                </h2>
                <p className="text-1xl p-2">
                    From September 2021 to May 2023, I worked as a Front-End
                    Junior Developer, specializing in React and Angular. <br />
                    During this period, I played a key role in developing an{" "}
                    <b>E-commerce</b> site for mobile shopping. My
                    responsibilities included building the authentication
                    system, designing shopping thumbnails, developing search
                    engine functionality, and integrating payment solutions.
                    This experience highlighted for me the superior capabilities
                    of React compared to other frameworks.
                </p>
            </div>
        </div>
    );
}
